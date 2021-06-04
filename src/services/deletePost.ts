import IPostsRepository from "../repositories/IPostRepository";
import AppError from "../errors/AppError";

class DeletePostService {

  private postRepository: IPostsRepository;

  constructor(postRepository: IPostsRepository) {
    this.postRepository = postRepository;
  }

  public async execute(id: string): Promise<void> {
    const post = await this.postRepository.findById(id);

    if (!post) { 
      throw new AppError('Post not found!', 400);
    }

    await this.postRepository.delete(id);
  }
}

export default DeletePostService;