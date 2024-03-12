import avatar from "../../../shared/images/avatar.png";


function HomeTopAuthors() {
  return (
    <div className="top">
      <h3>Топ авторов</h3>
      <content>
        <article>
          <img src={avatar} alt="" />
          <p>Кузнецова Анна Евгеньевна</p>
        </article>
        <article>
          <img src={avatar} alt="" />
          <p>Кузнецова Анна Евгеньевна</p>
        </article>
        <article>
          <img src={avatar} alt="" />
          <p>Кузнецова Анна Евгеньевна</p>
        </article>
        <article>
          <img src={avatar} alt="" />
          <p>Кузнецова Анна Евгеньевна</p>
        </article>
        <article>
          <img src={avatar} alt="" />
          <p>Кузнецова Анна Евгеньевна</p>
        </article>
      </content>
    </div>
  )
}

export default HomeTopAuthors;