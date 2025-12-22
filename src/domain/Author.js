export class Author {
  constructor({
    id,
    name,
    surname,
    patronymic,
    post,
    filialId,
    email,
    phone
  }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.post = post;
    this.filialId = filialId;
    this.email = email;
    this.phone = phone;
  }
}
