import { findId } from "../src/models/likeMeModel.js";

const idFinder = async (req, res, next) => {
  const { id } = req.params;
  const postId = await findId(id);
  if (!postId) {
    return res.status(404).json({ message: "No existe el registro o id" });
  }
  next();
};

export default idFinder;
