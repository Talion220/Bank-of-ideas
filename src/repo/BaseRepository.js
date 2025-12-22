export class BaseRepository {
  constructor() {
    this.items = new Map();
  }

  save(entity) {
    this.items.set(entity.id, entity);
    return entity;
  }

  findById(id) {
    return this.items.get(id) || null;
  }

  findAll() {
    return Array.from(this.items.values());
  }

  delete(id) {
    return this.items.delete(id);
  }

  update(entity) {
    if (!this.items.has(entity.id)) {
      throw new Error('Entity not found');
    }
    this.items.set(entity.id, entity);
    return entity;
  }
}
