import express from "express";
import {
  getAmenities,
  getAmenityById,
  createAmenity,
  updateAmenity,
  deleteAmenity,
} from "../controllers/AmenityController.js";

const router = express.Router();

router.get("/amenities", getAmenities);
router.get("/amenities/:id", getAmenityById);
router.post("/amenities", createAmenity);
router.patch("/amenities/:id", updateAmenity);
router.delete("/amenities/:id", deleteAmenity);

export default router;
