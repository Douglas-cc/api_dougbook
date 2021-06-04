import { getRepository, Repository } from "typeorm";
import CreateCommentsDTO from "../dtos/CreateCommentsDTO";
import Comments from "../models/comments";
import ICommentsRepository from "./ICommentsRepository";

class CommentsRepository implements ICommentsRepository {
  
  private ormRepository: Repository<Comments>;

  constructor() {
    this.ormRepository = getRepository(Comments);
  }

  public async findAll(): Promise<Comments[]> {
    return this.ormRepository.find({
      relations: ['post'],
    });
  }
  
  public async findById(id: string): Promise<Comments | undefined> {
    return this.ormRepository.findOne(id, {
      relations:['post'],
    });
  }
  
  public async create({ post_id, message  }: CreateCommentsDTO): Promise<Comments> {

    const comment = this.ormRepository.create({ post_id, message });

    await this.ormRepository.save(comment);
    return comment;

  }
  
  public async save(comments: Comments): Promise<Comments> {
    return this.ormRepository.save(comments);
  }
}

export default CommentsRepository;