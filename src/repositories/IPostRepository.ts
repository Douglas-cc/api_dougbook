import CreatePostDTO from "../dtos/CreatePostDTO";
import Posts from "../models/posts";

export default interface IPostsRepository {
  findAll(): Promise<Posts[]>;
  findById(id: string): Promise<Posts | undefined>;
  create(createPostDTO: CreatePostDTO): Promise<Posts>
  save(posts: Posts): Promise<Posts>
  delete(id: string): Promise<void>;
}