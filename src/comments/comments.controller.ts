import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './create-comment-dto';
import { HttpExceptionFilter } from 'src/htttp-exception.filter';

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
  async getComments() {
    return ApiSuccess({
      comments: await this.commentsService.getComments(),
    });
  }

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return ApiSuccess(
      await this.commentsService.createComment(createCommentDto),
    );
  }
}
