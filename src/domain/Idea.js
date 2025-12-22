export class Idea {
  constructor({
    id,
    categoryId,
    businessProcessId,
    title,
    problem,
    solution,
    result,
    note,
    authorId,
    coauthors,
    file,
    likes = 0,
    views = 0,
    creationDate = new Date(),
    redoDate = null,
    statusId,
    filialId,
    moderatorId = null,
    coordinatorId = null
  }) {
    this.id = id;
    this.categoryId = categoryId;
    this.businessProcessId = businessProcessId;
    this.title = title;
    this.problem = problem;
    this.solution = solution;
    this.result = result;
    this.note = note;
    this.authorId = authorId;
    this.coauthors = coauthors;
    this.file = file;
    this.likes = likes;
    this.views = views;
    this.creationDate = creationDate;
    this.redoDate = redoDate;
    this.statusId = statusId;
    this.filialId = filialId;
    this.moderatorId = moderatorId;
    this.coordinatorId = coordinatorId;
  }
}
