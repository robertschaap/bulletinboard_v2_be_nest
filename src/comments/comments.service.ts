import { Injectable } from '@nestjs/common';
import { Comment } from './comments.model';
import { CreateCommentDto } from './create-comment-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(CommentRepository) private commentRepository: CommentRepository) {}

  async getComments(): Promise<Comment[]> {
    return this.commentRepository.getComments();
  }

  private comments: Comment[] = [
    { id: 1, title: 'title1', body: 'body1', avatar: 'bunny1', name: 'name1' },
    { id: 2, title: 'title2', body: 'body2', avatar: 'bunny2', name: 'name2' },
    { id: 3, title: 'title3', body: 'body3', avatar: 'bunny3', name: 'name3' },
  ];

  createComment(createCommentDto: CreateCommentDto): Comment {
    const comment = {
      id: this.generateCommentId(),
      ...createCommentDto,
    };

    this.comments.push(comment);

    return comment;
  }

  private generateCommentId(): number {
    return this.comments.length + 1;
  }
}
