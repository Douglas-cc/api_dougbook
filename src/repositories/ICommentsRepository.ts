import CreateCommentsDTO from "../dtos/CreateCommentsDTO";
import Comments from "../models/comments";

export default interface ICommentsRepository {
  findAll(): Promise<Comments[]>;
  findById(id: string): Promise<Comments | undefined>;
  create(CreateComments: CreateCommentsDTO): Promise<Comments>;
  save(comments: Comments): Promise<Comments>;
}