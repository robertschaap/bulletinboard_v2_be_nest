import { Comment } from './comments.model';

export class CreateCommentDto implements Omit<Comment, 'id'> {
  avatar: string;
  body: string;
  name: string;
  title: string;
}
