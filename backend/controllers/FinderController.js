import Finders from "../models/FinderModel.js";
import Users from "../models/UserModel.js";
import { responseSuccessWithData } from "./Response.js";

export const createFinder = async (req, res) => {
  try {
    const profile = await Finders.create({
      full_name: req.data.username,
      userId: req.data.id,
    });
    
    return responseSuccessWithData(
      200,
      "Successfully Registered",
      req.data,
      res
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFinders = (req, res) => {};
export const getFinderById = (req, res) => {};
export const updateFinder = (req, res) => {};
export const deleteFinder = (req, res) => {};
