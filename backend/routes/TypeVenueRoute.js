import express from "express";
import {
  getTypeVenues,
  getTypeVenueById,
  createTypeVenue,
  updateTypeVenue,
  deleteTypeVenue,
} from "../controllers/TypeVenueController.js";

const router = express.Router();

router.get("/TypeVenues", getTypeVenues);
router.get("/TypeVenues/:id", getTypeVenueById);
router.post("/TypeVenues", createTypeVenue);
router.patch("/TypeVenues/:id", updateTypeVenue);
router.delete("/TypeVenues/:id", deleteTypeVenue);

export default router;
