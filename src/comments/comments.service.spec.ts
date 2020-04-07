import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import { CommentRepository } from './comment.repository';
import { Comment } from './comment.entity';

const mockCommentRepository = () => ({
  getComments: jest.fn(),
  createComment: jest.fn(),
});

describe('CommentsService', () => {
  let commentsService: CommentsService;
  let commentRepository: jest.Mocked<CommentRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: CommentRepository,
          useFactory: mockCommentRepository,
        },
      ],
    }).compile();

    commentsService = module.get(CommentsService);
    commentRepository = module.get(CommentRepository);
  });

  it('should get an array of comments', async () => {
    const mockComments = [{ id: 1, title: 'title', body: 'body', avatar: 'avatar', name: 'name' }] as Comment[];
    const mockFilters = { sort: 'asc', offset: 0 };

    commentRepository.getComments.mockResolvedValue(mockComments);

    const result = await commentsService.getComments(mockFilters);

    expect(commentRepository.getComments).toHaveBeenCalledWith(mockFilters);
    expect(result).toEqual(mockComments);
  });

  it('should create a comment', async () => {
    const mockComment = { id: 1, title: 'title', body: 'body', avatar: 'avatar', name: 'name' } as Comment;
    const mockCommentDto = { title: 'title', body: 'body', avatar: 'avatar', name: 'name' }

    commentRepository.createComment.mockResolvedValue(mockComment);

    const result = await commentsService.createComment(mockCommentDto);
    expect(result).toEqual(mockComment);
  });
});
