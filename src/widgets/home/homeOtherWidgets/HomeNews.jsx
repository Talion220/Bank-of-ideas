import { NavLink } from "react-router-dom";
import NewsCover from "../../../shared/images/NewsCover.png";
import "./homeNews.scss";

function HomeNews() {
  return (
    <div className="homeNews">
      <h3>Новости</h3>
      <main>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Новость 1</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Новость 2</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Новость 3</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Новость 4</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Новость 5</p>
            </div>
          </article>
        </NavLink>
      </main>
    </div>
  );
}

export default HomeNews;
