import Comments from "../models/comments";
import ICommentsRepository from "../repositories/ICommentsRepository";

class ListAllCommentsService {

  private commentsRepository: ICommentsRepository;

  constructor( commentsRepository: ICommentsRepository ) {
    this.commentsRepository = commentsRepository;
  }

  public async execute(): Promise<Comments[]> {
    
    const comments = await this.commentsRepository.findAll();

    return comments;

  }
}

export default ListAllCommentsService;