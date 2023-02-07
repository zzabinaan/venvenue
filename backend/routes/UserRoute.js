import express from "express";
import { createFinder } from "../controllers/FinderController.js";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createAdmin,
  createUserVendor,
} from "../controllers/UserController.js";
import { createVendor } from "../controllers/VendorController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/users/:id", verifyUser, adminOnly, getUserById);
router.patch("/users/:id", verifyUser, updateUser);
router.delete("/users/:id", verifyUser, adminOnly, deleteUser);

router.post("/register", createUser, createFinder);
router.post("/registerVendor", createUserVendor, createVendor);
router.post("/registerAdmin", verifyUser, adminOnly, createAdmin);

export default router;
