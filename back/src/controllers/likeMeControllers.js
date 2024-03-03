import { getPostData, createPostData } from "../models/likeMeModel.js";

const getAllPost = async (req, res) => {
  try {
    const posts = await getPostData();
    res.status(200).json({ posts: posts });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const createAllPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await createPostData(post);
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};
export { getAllPost, createAllPost };
