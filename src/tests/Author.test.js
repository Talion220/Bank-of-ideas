import { Author } from '../domain/Author.js';

describe('Author entity', () => {
  test('creates author with all fields', () => {
    const author = new Author({
      id: 1,
      name: 'Ivan',
      surname: 'Ivanov',
      patronymic: 'Ivanovich',
      post: 'Engineer',
      filialId: 10,
      email: 'ivan@mail.ru',
      phone: '+79990000000'
    });

    expect(author.id).toBe(1);
    expect(author.name).toBe('Ivan');
    expect(author.surname).toBe('Ivanov');
    expect(author.filialId).toBe(10);
  });
});
