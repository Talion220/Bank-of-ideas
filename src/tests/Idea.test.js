import { Idea } from '../domain/Idea.js';

describe('Idea entity', () => {
  test('creates idea with default values', () => {
    const idea = new Idea({
      id: 1,
      title: 'Bank of Ideas',
      problem: 'No platform',
      solution: 'Web app',
      result: 'Growth',
      authorId: 10,
      categoryId: 2,
      businessProcessId: 3,
      statusId: 1,
      filialId: 5
    });

    expect(idea.id).toBe(1);
    expect(idea.title).toBe('Bank of Ideas');
    expect(idea.likes).toBe(0);
    expect(idea.views).toBe(0);
    expect(idea.creationDate).toBeInstanceOf(Date);
  });
});
