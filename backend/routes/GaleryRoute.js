import express from "express";
import {
  getGaleries,
  getGaleryById,
  createGalery,
  updateGalery,
  deleteGalery,
} from "../controllers/GaleryController.js";

const router = express.Router();

router.get("/galeries", getGaleries);
router.get("/galeries/:id", getGaleryById);
router.post("/galeries", createGalery);
router.patch("/galeries/:id", updateGalery);
router.delete("/galeries/:id", deleteGalery);

export default router;
