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
    res.status(500).json({ error: "No se ha podido procesar la solicitud" });
    console.error("No se ha podido procesar la solicitud:", error);
  }
};

const createAllPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await createPostData(post);
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(400).json({
      error: "No se ha podido procesar la solicitud, post no agregado",
    });
    console.error("No se ha podido procesar la solicitud:", error);
  }
};

const addLike = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await editPostLikes(id);
    res.status(200).json("Like agregado");
  } catch (error) {
    res.status(500).json({
      error: "No se ha podido procesar la solicitud, like no agregado",
    });
    console.error("No se ha podido procesar la solicitud:", error);
  }
};

const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await deletePostData(id);
    res.status(200).json("Post eliminado");
  } catch (error) {
    res.status(500).json({
      error: "No se ha podido procesar la solicitud, post no encontrado",
    });
    console.error("No se ha podido procesar la solicitud:", error);
  }
};

export { getAllPost, createAllPost, addLike, removePost };
