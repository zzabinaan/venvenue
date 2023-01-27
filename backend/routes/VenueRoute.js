import express from "express";
import {
  getVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
} from "../controllers/VenueController.js";

const router = express.Router();

router.get("/venues", getVenues);
router.get("/venues/:id", getVenueById);
router.post("/venues", createVenue);
router.patch("/venues/:id", updateVenue);
router.delete("/venues/:id", deleteVenue);

export default router;
