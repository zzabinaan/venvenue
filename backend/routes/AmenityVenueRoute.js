import express from "express";
import {
  getAmenitiesVenue,
  getAmenityVenueById,
  createAmenityVenue,
  updateAmenityVenue,
  deleteAmenityVenue,
} from "../controllers/AmenityVenueController.js";
const router = express.Router();

router.get("/amenitiesVenue", getAmenitiesVenue);
router.get("/amenitiesVenue/:id", getAmenityVenueById);
router.post("/amenitiesVenue", createAmenityVenue);
router.patch("/amenitiesVenue/:id", updateAmenityVenue);
router.delete("/amenitiesVenue/:id", deleteAmenityVenue);

export default router;
