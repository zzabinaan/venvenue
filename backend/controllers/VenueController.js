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
import { json } from "sequelize";

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

  try {
    const data = await Venues.create({
      name: name,
      description: description,
      address: address,
      capacity: capacity,
      price: price,
      rental_types: rental_types,
      status: status,
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
};

export const updateVenue = async (req, res) => {
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
  if (!venue) return responseFailed(404, "Venue Not Found");

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
  try {
    await Venues.update(
      {
        name: name,
        description: description,
        address: address,
        capacity: capacity,
        price: price,
        rental_types: rental_types,
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
  if (!venue) return responseFailed(404, "Venue Not Found");

  if (vendor.id !== venue.vendorId)
    return responseFailed(
      403,
      "You don't have access to update this venue",
      res
    );

  try {
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
