import AppError from "../errors/AppError";
import Comments from "../models/comments";
import ICommentsRepository from "../repositories/ICommentsRepository";
import IPostRepository from "../repositories/IPostRepository";

interface IRequest {
  message: string,
  post_id: string,
}

class CreateCommentsService {
  private commentsRepository: ICommentsRepository;

  private postRepository: IPostRepository;

  constructor(
    commentsRepository: ICommentsRepository,
    postRepository: IPostRepository,
  ) {
    this.commentsRepository = commentsRepository;
    this.postRepository = postRepository;
  }

  public async execute({
    message, 
    post_id,
  }: IRequest): Promise<Comments> {
    const verifyPost = await this.postRepository.findById(post_id);

    if (!verifyPost) {
      throw new AppError('Post not found', 400);
    }

    const comment = await this.commentsRepository.create({
      message, 
      post_id,
    });

    return comment;
  }
}

export default CreateCommentsService;