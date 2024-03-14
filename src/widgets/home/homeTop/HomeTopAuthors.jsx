import avatar from "../../../shared/images/avatar.png";
import './homeTopAuthors.scss';
import { NavLink } from "react-router-dom";


function HomeTopAuthors() {
  return (
    <div className="top">
      <h3>Топ авторов</h3>
      <main>
        <NavLink to='/profile'>
          <article>
            <div>
              <span><img src={avatar} alt="" /></span>
              <p>Кузнецова Анна Евгеньевна</p>
            </div>
            <p>№1</p>
          </article>
        </NavLink>
        <NavLink to='/profile'>
          <article>
            <div>
              <span><img src={avatar} alt="" /></span>
              <p>Кузнецова Анна Евгеньевна</p>
            </div>
            <p>№2</p>
          </article>
        </NavLink>
        <NavLink to='/profile'>
          <article>
            <div>
              <span><img src={avatar} alt="" /></span>
              <p>Кузнецова Анна Евгеньевна</p>
            </div>
            <p>№3</p>
          </article>
        </NavLink>
        <NavLink to='/profile'>
          <article>
            <div>
              <span><img src={avatar} alt="" /></span>
              <p>Кузнецова Анна Евгеньевна</p>
            </div>
            <p>№4</p>
          </article>
        </NavLink>
        <NavLink to='/profile'>
          <article>
            <div>
              <span><img src={avatar} alt="" /></span>
              <p>Кузнецова Анна Евгеньевна</p>
            </div>
            <p>№5</p>
          </article>
        </NavLink>
      </main>
    </div>
  )
}

export default HomeTopAuthors;