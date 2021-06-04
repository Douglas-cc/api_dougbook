import { Router } from "express";
import PostController from "../controllers/PostController";

const postRoutes = Router();
const postController = new PostController();

postRoutes.get('/', postController.index);
postRoutes.post('/', postController.create);
postRoutes.put('/:id', postController.update);
postRoutes.delete('/:id',postController.destroy);

export default postRoutes;