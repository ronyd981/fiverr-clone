import express from "express";
import {
  createGig,
  deleteGig,
  getAllGigs,
  getGig,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/", getAllGigs);
router.get("/:id", getGig);
router.get("/test", (req, res) => {
  res.send("Hello world");
});

export default router;
