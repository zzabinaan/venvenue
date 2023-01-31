import path from "path";
import fs from "fs";

import Venues from "../models/VenueModel.js";
import Categories from "../models/CategoryModel.js";
import Locations from "../models/LocationModel.js";
import Vendors from "../models/VendorModel.js";
import Users from "../models/UserModel.js";

import {
  responseFailed,
  responseSuccess,
  responseSuccessWithData,
} from "./Response.js";

export const getVenues = async (req, res) => {
  try {
    const data = await Venues.findAll({
      include: [
        {
          model: Categories,
          attributes: ["id", "category_name"],
        },
        {
          model: Locations,
          attributes: ["id", "city", "district"],
        },
        {
          model: Vendors,
          attributes: [
            "id",
            "name",
            "address",
            "phone_number",
            "website",
            "profile_picture",
          ],
        },
      ],
    });
    responseSuccessWithData(200, "Success", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const getVenueById = async (req, res) => {
  try {
    const data = await Venues.findOne({
      include: [
        {
          model: Categories,
          attributes: ["id", "category_name"],
        },
        {
          model: Locations,
          attributes: ["id", "city", "district"],
        },
        {
          model: Vendors,
          attributes: [
            "id",
            "name",
            "address",
            "phone_number",
            "website",
            "profile_picture",
          ],
        },
      ],
      where: {
        uuid: req.params.id,
      },
    });
    if (!data) return responseFailed(404, "Venue Not Found", res);
    responseSuccessWithData(200, "Success", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const createVenue = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }

  const vendor = await Vendors.findOne({
    where: {
      userId: user.id,
    },
  });
  if (!vendor) {
    return responseFailed(404, "vendor Not Found", res);
  }

  const {
    name,
    description,
    address,
    capacity,
    price,
    rental_types,
    status,
    categoryId,
    locatonId,
  } = req.body;

  const vendorId = vendor.id;

  if (req.file === null) {
    return responseFailed(400, "You have upload cover for your venue", res);
  }

  const file = req.files.cover;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = name + "-cover-" + file.md5 + ext;
  const cover_url = `${req.protocol}://${req.get(
    "host"
  )}/images/cover-venue/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return responseFailed(422, "Invalid Image Upload", res);
  if (fileSize > 5000000)
    return responseFailed(422, "Image must be less than 5 MB", res);

  file.mv(`./public/images/cover-venue/${fileName}`, async (err) => {
    if (err) return responseFailed(500, err.message, res);

    try {
      const data = await Venues.create({
        name: name,
        description: description,
        address: address,
        capacity: capacity,
        price: price,
        rental_types: rental_types,
        status: status,
        cover: fileName,
        cover_url: cover_url,
        categoryId: categoryId,
        locatonId: locatonId,
        vendorId: vendorId,
      });

      return responseSuccessWithData(
        "200",
        "Your venue has been submited, please wait for the admin to verify",
        data,
        res
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export const updateVenue = async (req, res) => {
  // get id loged-in user from session.uuid
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }

  // find id vendor by id user
  const vendor = await Vendors.findOne({
    where: {
      userId: user.id,
    },
  });
  if (!vendor) {
    return responseFailed(404, "vendor Not Found", res);
  }

  // find venue by vendorId
  const venue = await Venues.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!venue) return responseFailed(404, "Venue Not Found", status);

  // comparing vendorId with vendor.id

  if (vendor.id !== venue.vendorId)
    return responseFailed(
      403,
      "You don't have access to update this venue",
      res
    );

  const {
    name,
    description,
    address,
    capacity,
    price,
    rental_types,
    status,
    categoryId,
    locationId,
  } = req.body;
  const vendorId = venue.vendorId;

  let fileName = "";
  if (req.files === null) {
    fileName = venue.cover;
  } else {
    const file = req.files.cover;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = name + "-cover-" + file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return responseFailed(422, "Invalid Image Upload", res);
    if (fileSize > 5000000)
      return responseFailed(422, "Image must be less than 5 MB", res);

    const filepath = `./public/images/cover-venue/${venue.cover}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/cover-venue/${fileName}`, async (err) => {
      if (err) return responseFailed(500, err.message, res);
    });
  }
  const cover_url = `${req.protocol}://${req.get(
    "host"
  )}/images/cover-venue/${fileName}`;
  const cover = fileName;
  try {
    await Venues.update(
      {
        name: name,
        description: description,
        address: address,
        capacity: capacity,
        price: price,
        rental_types: rental_types,
        cover: cover,
        cover_url: cover_url,
        status: status,
        categoryId: categoryId,
        locationId: locationId,
      },
      {
        where: { id: venue.id },
      }
    );

    const data = {
      name,
      description,
      address,
      capacity,
      price,
      rental_types,
      cover,
      cover_url,
      status,
      categoryId,
      locationId,
      vendorId,
    };
    return responseSuccessWithData(200, "Venue Updated", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const deleteVenue = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }

  const vendor = await Vendors.findOne({
    where: {
      userId: user.id,
    },
  });
  if (!vendor) {
    return responseFailed(404, "vendor Not Found", res);
  }

  const venue = await Venues.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!venue) return responseFailed(404, "Venue Not Found", res);

  if (vendor.id !== venue.vendorId)
    return responseFailed(
      403,
      "You don't have access to update this venue",
      res
    );

  try {
    const filepath = `./public/images/cover-venue/${venue.cover}`;
    fs.unlinkSync(filepath);
    await Venues.destroy({
      where: {
        id: venue.id,
      },
    });
    return responseSuccess(200, "Venue Deleted", res);
  } catch (error) {
    console.log(error);
  }
};
