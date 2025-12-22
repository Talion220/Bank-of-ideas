import { Status } from '../domain/Status.js';

describe('Status entity', () => {
  test('creates status', () => {
    const status = new Status({
      id: 1,
      name: 'Created'
    });

    expect(status.id).toBe(1);
    expect(status.name).toBe('Created');
  });
});
