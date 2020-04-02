import { Injectable } from '@nestjs/common';
import { Comment } from './comments.model';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [
    { id: 1, title: 'title', body: 'body', avatar: 'bunny', name: 'name' },
    { id: 2, title: 'title', body: 'body', avatar: 'bunny', name: 'name' },
    { id: 3, title: 'title', body: 'body', avatar: 'bunny', name: 'name' },
  ];

  getComments(): Comment[] {
    return this.comments;
  }
}
