import { Request, Response } from 'express';
import PostRepository from '../repositories/PostRepository';
import CommentsRepository from '../repositories/CommentsRepository';
import CreateCommentsService from '../services/CreateComments';
import ListAllCommentsService from '../services/listAllComments';

class CommentsController {

  public async index(request: Request, response: Response): Promise<Response> {
    const commentsRepository = new CommentsRepository();
    const commentsService = new ListAllCommentsService(commentsRepository);

    const comments = await commentsService.execute();

    return response.json(comments);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { message, post_id } = request.body;
    
    const commentsRepository = new CommentsRepository()
    const postRepository = new PostRepository()
    const CreateComments = new CreateCommentsService(
      commentsRepository,
      postRepository,
    );

    const comment = await CreateComments.execute({
      post_id,
      message,
    });

    return response.status(200).json(comment)

  }

}

export default CommentsController;