import express from "express";

import {
  getVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
} from "../controllers/VenueController.js";
import { verifyUser, adminOnly, vendorOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/venues", getVenues);
router.get("/venues/:id", getVenueById);
router.post("/venues", verifyUser, vendorOnly, createVenue);
router.patch("/venues/:id", updateVenue);
router.delete("/venues/:id", deleteVenue);

export default router;
