import { responseSuccess, responseFailed } from "../controllers/Response.js";
import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
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

  req.userId = user.id;
  req.role = user.role;

  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }
  if (user.role !== "admin") {
    return responseFailed(403, "Forbidden Access", res);
  }
  next();
};

export const vendorOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) {
    return responseFailed(404, "User Not Found", res);
  }
  if (user.role !== "vendor") {
    return responseFailed(403, "Forbidden Access", res);
  }
  next();
};
