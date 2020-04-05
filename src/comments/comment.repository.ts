import { EntityRepository, Repository } from "typeorm";
import { Comment } from './comment.entity';
import { CreateCommentDto } from "./create-comment-dto";
import { GetCommentsFilterDto } from "./get-comments-filter.dto";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async getComments(filterDto: GetCommentsFilterDto): Promise<Comment[]> {
    const { sort, offset } = filterDto;
    const query = this.createQueryBuilder('comment');

    const comments = await query
    .orderBy('comment.id', sort === 'asc' ? 'ASC' : 'DESC')
    .limit(4)
    .offset(offset * 4)
    .getMany();

    return comments;
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
