import express from "express";
import {
  getFavorites,
  getFavoriteById,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} from "../controllers/FavoriteController.js";

const router = express.Router();

router.get("/favorites", getFavorites);
router.get("/favorites/:id", getFavoriteById);
router.post("/favorites", createFavorite);
router.patch("/favorites/:id", updateFavorite);
router.delete("/favorites/:id", deleteFavorite);

export default router;
