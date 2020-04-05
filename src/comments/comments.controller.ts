import { Controller, Get, Post, Body, UseFilters, Query, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './create-comment-dto';
import { HttpExceptionFilter } from 'src/htttp-exception.filter';
import { GetCommentsFilterDto } from './get-comments-filter.dto';

// TODO: move this into a decorator under the controller and handle errors
const ApiSuccess = <T>(data: T) => ({
  status: 'success',
  data,
  error: 'null',
});
@Controller('comments')
@UseFilters(new HttpExceptionFilter())
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async getComments(@Query(ValidationPipe) filterDto: GetCommentsFilterDto ) {
    return ApiSuccess({
      comments: await this.commentsService.getComments(filterDto),
    });
  }

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return ApiSuccess(
      await this.commentsService.createComment(createCommentDto),
    );
  }
}
