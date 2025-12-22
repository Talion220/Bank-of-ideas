import { Category } from '../domain/Category.js';

describe('Category entity', () => {
  test('creates category', () => {
    const category = new Category({
      id: 3,
      name: 'IT'
    });

    expect(category.id).toBe(3);
    expect(category.name).toBe('IT');
  });
});
