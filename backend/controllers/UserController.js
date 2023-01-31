import argon2 from "argon2";
import Finders from "../models/FinderModel.js";
import User from "../models/UserModel.js";
import {
  responseFailed,
  responseSuccess,
  responseSuccessWithData,
} from "./Response.js";

export const getUsers = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["id", "username", "email", "role"],
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
        id: req.params.id,
      },
      attributes: ["id", "username", "role"],
    });
    if (!data) return responseFailed(404, "User Not Found", res);
    responseSuccessWithData(200, "Success", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const role = "finder";
  if (password !== confirmPassword)
    return responseFailed(400, "Password and Confirm Password Not Match", res);
  const hashPassword = await argon2.hash(password);
  try {
    const data = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    });
    return responseSuccessWithData(201, "Successfully Registered", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const createVendor = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const role = "vendor";
  if (password !== confirmPassword)
    return responseFailed(400, "Password and Confirm Password Not Match", res);
  const hashPassword = await argon2.hash(password);
  try {
    const data = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    });
    return responseSuccessWithData(201, "Successfully Registered", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const createAdmin = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const role = "admin";
  if (password !== confirmPassword)
    return responseFailed(400, "Password and Confirm Password Not Match", res);
  const hashPassword = await argon2.hash(password);
  try {
    const data = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    });
    return responseSuccessWithData(201, "Successfully Registered", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return responseFailed(404, "User Not Found", res);

  if (req.userId !== user.id)
    return responseFailed(403, "Access Forbiden", res);

  const { username, email, password, confirmPassword, role } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confirmPassword)
    return responseFailed(400, "Password and Confirm Password Not Match", res);

  try {
    await User.update(
      {
        username: username,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    const id = user.id;
    const data = {
      id,
      username,
      email,
      role,
    };
    return responseSuccessWithData(201, "User Updated", data, res);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return responseFailed(404, "User Not Found", res);

  try {
    await User.destroy({
      where: {
        id: user.id,
      },
    });
    return responseSuccess(200, "User Deleted", res);
  } catch (error) {
    console.log(error);
  }
};
