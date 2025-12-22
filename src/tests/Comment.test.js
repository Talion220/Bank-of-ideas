import { Comment } from '../domain/Comment.js';

describe('Comment entity', () => {
  test('creates comment', () => {
    const comment = new Comment({
      id: 1,
      authorId: 5,
      ideaId: 10,
      content: 'Good idea'
    });

    expect(comment.id).toBe(1);
    expect(comment.content).toBe('Good idea');
    expect(comment.date).toBeInstanceOf(Date);
  });
});
