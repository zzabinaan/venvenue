import argon2 from "argon2";
import User from "../models/UserModel.js";
import {
  responseFailed,
  responseSuccess,
  responseSuccessWithData,
} from "./Response.js";

export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return responseFailed(404, "User Not Found", res);
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return responseFailed(400, "Wrong Password", res);

  req.session.userId = user.id;
  const id = user.id;
  const username = user.username;
  const email = user.email;
  const role = user.role;
  const data = {
    id,
    username,
    email,
    role,
  };

  responseSuccessWithData(200, "Login Success", data, res);
};

export const me = async (req, res) => {
  if (!req.session.userId) {
    return responseFailed(401, "You Need to Login First", res);
  }
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }

  responseSuccessWithData(200, "Success", user, res);
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return responseFailed(400, "Can't Logout", res);
    responseSuccess(200, "Successfully Logout", res);
  });
};
