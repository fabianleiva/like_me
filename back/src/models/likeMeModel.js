import pool from "../../db/conectionDb.js";

const getPostData = async () => {
  const SQLquery = { text: "SELECT * FROM posts" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const createPostData = async ({ titulo, img, descripcion }) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [titulo, img, descripcion, 0],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const editPostLikes = async (id) => {
  const SQLquery = {
    text: "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const deletePostData = async (id) => {
  const SQLquery = {
    text: "DELETE FROM posts WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

export { getPostData, createPostData, editPostLikes, deletePostData };
