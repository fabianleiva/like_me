import pool from "../../db/conectionDb.js";

const getPostData = async () => {
  const SQLquery = { text: "SELECT * FROM posts" };
  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

const createPostData = async ({ titulo, img, descripcion }) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *",
    values: [titulo, img, descripcion],
  };
  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

export { getPostData, createPostData };
