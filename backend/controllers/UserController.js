import argon2 from "argon2";
import User from "../models/UserModel.js";
import {
  responseFailed,
  responseSuccess,
  responseSuccessWithData,
} from "./Response.js";

export const getUsers = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["id", "uuid", "username", "email", "role"],
    });
    responseSuccessWithData(200, "Success", data, res);
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (req, res) => {
  try {
    const data = await User.findOne({
      where: {
        uuid: req.params.id,
      },
      attributes: ["id", "uuid", "username", "role"],
    });
    if (!data) return responseFailed(404, "User Not Found", res);
    responseSuccessWithData(200, "Success", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, confirmPassword, role } = req.body;
  if (password !== confirmPassword)
    return responseFailed(400, "Password and Confirm Password Not Match", res);
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    });
    const data = {
      username,
      email,
      role,
    };
    return responseSuccessWithData(201, "Successfully Registered", data, res);
    // return responseSuccess(200, "Successfully Registered", res);
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (req, res) => {};
export const deleteUser = (req, res) => {};
