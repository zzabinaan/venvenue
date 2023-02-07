import Vendors from "../models/VendorModel.js";
import { responseSuccessWithData } from "./Response.js";

export const createVendor = async (req, res) => {
  try {
    const profile = await Vendors.create({
      name: req.data.username,
      userId: req.data.id,
    });

    return responseSuccessWithData(
      200,
      "Successfully Registered as Vendor",
      req.data,
      res
    );
  } catch (error) {
    console.log(error);
  }
};
export const getVendors = (req, res) => {};
export const getVendorById = (req, res) => {};
export const updateVendor = (req, res) => {};
export const deleteVendor = (req, res) => {};
