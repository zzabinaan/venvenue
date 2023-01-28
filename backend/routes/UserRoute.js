import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createAdmin,
  createVendor,
} from "../controllers/UserController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/users/:id", verifyUser, getUserById);
router.patch("/users/:id", verifyUser, updateUser);
router.delete("/users/:id", verifyUser, adminOnly, deleteUser);

router.post("/register", createUser);
router.post("/registerAdmin", verifyUser, adminOnly, createAdmin);
router.post("/registerVendor", verifyUser, adminOnly, createVendor);

export default router;
