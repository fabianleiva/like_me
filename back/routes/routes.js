import express from "express";
import {
  getAllPost,
  createAllPost,
  addLike,
  removePost,
} from "../src/controllers/likeMeControllers.js";
const router = express.Router();

router.get("/posts", getAllPost);
router.post("/posts", createAllPost);
router.put("/posts/like/:id", addLike);
router.delete("/posts/:id", removePost);

export default router;
