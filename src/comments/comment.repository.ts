import { EntityRepository, Repository } from "typeorm";
import { Comment } from './comment.entity';
import { CreateCommentDto } from "./create-comment-dto";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async getComments(): Promise<Comment[]> {
    return this.find();
  }

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const { title, body, avatar, name } = createCommentDto;

    const comment = new Comment();
    comment.title = title;
    comment.body = body;
    comment.avatar = avatar;
    comment.name = name;

    await comment.save();

    return comment;

  }
}
