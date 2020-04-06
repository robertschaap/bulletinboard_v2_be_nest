import { Controller, Get, Post, Body, UseFilters, Query, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './create-comment.dto';
import { HttpExceptionFilter } from '../htttp-exception.filter';
import { GetCommentsFilterDto } from './get-comments-filter.dto';
import { ApiResponse } from '../apiresponse';

@Controller('comments')
@UseFilters(new HttpExceptionFilter())
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async getComments(@Query(ValidationPipe) filterDto: GetCommentsFilterDto ) {
    return ApiResponse.success({
      comments: await this.commentsService.getComments(filterDto),
    });
  }

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return ApiResponse.success(
      await this.commentsService.createComment(createCommentDto),
    );
  }
}
