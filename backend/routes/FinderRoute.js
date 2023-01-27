import express from "express";
import {
  getFinders,
  getFinderById,
  createFinder,
  updateFinder,
  deleteFinder,
} from "../controllers/FinderController.js";

const router = express.Router();

router.get("/finders", getFinders);
router.get("/finders/:id", getFinderById);
router.post("/finders", createFinder);
router.patch("/finders/:id", updateFinder);
router.delete("/finders/:id", deleteFinder);

export default router;
