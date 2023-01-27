import express from "express";
import {
  getLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} from "../controllers/LocationController.js";

const router = express.Router();

router.get("/locations", getLocations);
router.get("/locations/:id", getLocationById);
router.post("/locations", createLocation);
router.patch("/locations/:id", updateLocation);
router.delete("/locations/:id", deleteLocation);

export default router;
