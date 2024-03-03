import express from 'express';
import {getAllPost, createAllPost} from '../src/controllers/likeMeControllers.js';
const router = express.Router();


router.get('/posts', getAllPost);
router.post('/posts', createAllPost);

export default router;