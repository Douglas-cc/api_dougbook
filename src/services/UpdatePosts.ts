import Posts from "../models/posts";
import IPostsRepository from "../repositories/IPostRepository"
import PostRepository from "../repositories/PostRepository";
import AppError from '../errors/AppError';

interface Request {
  id: string
  title: string;
  body: string;
}

class UpdatePostService {

  private postRepository: IPostsRepository;

  constructor (postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  public async execute({ id, title, body }: Request): Promise<Posts> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    post.title = title;
    post.body = body;

    await this.postRepository.save(post);

    return post

  }

}

export default UpdatePostService;