import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { GetCommentsFilterDto } from './get-comments-filter.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(CommentRepository) private commentRepository: CommentRepository) {}

  async getComments(filterDto: GetCommentsFilterDto): Promise<Comment[]> {
    return this.commentRepository.getComments(filterDto);
  }

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentRepository.createComment(createCommentDto);
  }
}
