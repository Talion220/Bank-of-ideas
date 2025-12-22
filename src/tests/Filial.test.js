import { Filial } from '../domain/Filial.js';

describe('Filial entity', () => {
  test('creates filial', () => {
    const filial = new Filial({
      id: 1,
      name: 'Moscow'
    });

    expect(filial.id).toBe(1);
    expect(filial.name).toBe('Moscow');
  });
});
