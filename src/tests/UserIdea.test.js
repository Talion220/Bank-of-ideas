import { UserIdea } from '../domain/UserIdea.js';

describe('UserIdea entity', () => {
  test('creates user-idea relation', () => {
    const userIdea = new UserIdea({
      id: 1,
      userId: 7,
      ideaId: 3
    });

    expect(userIdea.userId).toBe(7);
    expect(userIdea.ideaId).toBe(3);
  });
});
