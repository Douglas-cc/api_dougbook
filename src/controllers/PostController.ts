import { Request, Response } from 'express';
import PostRepository from '../repositories/PostRepository';
import CreatePostService from '../services/CreatePosts';
import UpdatePostService from '../services/UpdatePosts';
import DeletePostService from '../services/deletePost';

class PostController {

  public async index(request: Request, response: Response): Promise<Response> {
    const postRepository = new PostRepository();
    const posts = await postRepository.findAll();

    return response.json(posts)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, body } = request.body;
    
    const postRepository = new PostRepository();
    const createPost = new CreatePostService(postRepository);

    const post = await createPost.execute({ title, body });

    return response.status(201).json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    
    const { id } = request.params;
    const { title, body } = request.body;
    
    const postRepository = new PostRepository();
    const updatePost = new UpdatePostService(postRepository);

    const post = await updatePost.execute({ id, title, body });

    return response.json(post);

  }

  public async destroy( request: Request, response: Response ): Promise<Response> {
    
    const { id } = request.params;

    const postRepository = new PostRepository();
    const destroyPost = new DeletePostService(postRepository);

    await destroyPost.execute(id);

    return response.status(204).send();

  }

}

export default PostController;