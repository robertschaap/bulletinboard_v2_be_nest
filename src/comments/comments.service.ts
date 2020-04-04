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

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentRepository.createComment(createCommentDto);
  }
}
