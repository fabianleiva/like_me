import express from "express";
import {
  getAllPost,
  createAllPost,
  addLike,
  removePost,
} from "../src/controllers/likeMeControllers.js";
import idFinder from "../middleware/idFinder.js";

const router = express.Router();

router.get("/posts", getAllPost);
router.post("/posts", createAllPost);
router.put("/posts/like/:id", idFinder, addLike);
router.delete("/posts/:id", idFinder, removePost);

export default router;
