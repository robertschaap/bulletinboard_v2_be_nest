import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './create-comment-dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async getComments() {
    return {
      status: 'success',
      data: {
        comments: await this.commentsService.getComments(),
      },
      error: null,
    }
  }

  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto) {
    const comment = this.commentsService.createComment(createCommentDto);

    return {
      status: 'success',
      data: comment,
      error: null,
    };
  }
}
