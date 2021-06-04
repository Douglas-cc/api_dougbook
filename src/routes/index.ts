import { Router } from "express";
import postRoutes from "./post";
import commentsRoutes from "./comments";


const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => {
  return response.json({ message: 'Modo Sennin Ativar!' })
});

routes.use(`${prefixRoutes}/posts`, postRoutes);
routes.use(`${prefixRoutes}/comments`, commentsRoutes);

export default routes;