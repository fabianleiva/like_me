import {
  getPostData,
  createPostData,
  editPostLikes,
  deletePostData,
} from "../models/likeMeModel.js";

const getAllPost = async (req, res) => {
  try {
    const posts = await getPostData();
    res.status(200).json(posts);
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

const addLike = async (req, res) => {
  const { id } = req.params;
  try {
    await editPostLikes(id);
    res.send("Like agregado!");
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const removePost = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePostData(id);
    res.send('Post eliminado!')
  } catch (error) {
    
  }
}

export { getAllPost, createAllPost, addLike, removePost };
