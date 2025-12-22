import { Process } from '../domain/Process.js';

describe('Process entity', () => {
  test('creates process', () => {
    const process = new Process({
      id: 5,
      name: 'Optimization'
    });

    expect(process.id).toBe(5);
    expect(process.name).toBe('Optimization');
  });
});
