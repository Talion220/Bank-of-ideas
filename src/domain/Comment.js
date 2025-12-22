export class Comment {
  constructor({
    id,
    authorId,
    ideaId,
    content,
    date = new Date()
  }) {
    this.id = id;
    this.authorId = authorId;
    this.ideaId = ideaId;
    this.content = content;
    this.date = date;
  }
}
