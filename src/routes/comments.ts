import { Router } from "express";
import CommentsController from "../controllers/CommentsController";

const commentsRoutes = Router();
const commentsController = new CommentsController();

commentsRoutes.get('/', commentsController.index);
commentsRoutes.post('/', commentsController.create);

export default commentsRoutes;