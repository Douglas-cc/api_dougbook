import { getRepository, Repository } from "typeorm";
import CreatePostDTO from "../dtos/CreatePostDTO";
import Posts from "../models/posts";
import IPostsRepository from "./IPostRepository";

class PostRepository implements IPostsRepository{
  
  private ormRepository: Repository<Posts>;

  constructor() {
    this.ormRepository = getRepository(Posts);
  }

  public async findAll(): Promise<Posts[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Posts | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
  
  public async create({ title, body }: CreatePostDTO): Promise<Posts> {
    const post = this.ormRepository.create({
      title, body
    });

    await this.ormRepository.save(post)

    return post
    
  }

  public async save(posts: Posts): Promise<Posts> {
    return this.ormRepository.save(posts);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
  
}

export default PostRepository