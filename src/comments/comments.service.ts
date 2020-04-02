import { Injectable } from '@nestjs/common';
import { Comment } from './comments.model';
import { CreateCommentDto } from './create-comment-dto';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [
    { id: 1, title: 'title1', body: 'body1', avatar: 'bunny1', name: 'name1' },
    { id: 2, title: 'title2', body: 'body2', avatar: 'bunny2', name: 'name2' },
    { id: 3, title: 'title3', body: 'body3', avatar: 'bunny3', name: 'name3' },
  ];

  getComments(): Comment[] {
    return this.comments;
  }

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
