import Posts from "../models/posts";
import IPostsRepository from "../repositories/IPostRepository"
import PostRepository from "../repositories/PostRepository";

interface Request {
  title: string;
  body: string;
}

class CreatePostService {

  private postRepository: IPostsRepository;

  constructor (postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  public async execute({ title, body }: Request): Promise<Posts> {
    const post = await this.postRepository.create({ title, body });
    return post;
  }
}

export default CreatePostService