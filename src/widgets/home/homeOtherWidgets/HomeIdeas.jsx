import { NavLink } from "react-router-dom";
import NewsCover from "../../../shared/images/NewsCover.png";
import "./homeIdeas.scss";

function HomeIdeas() {
  return (
    <div className="homeNews">
      <h3>Идеи</h3>
      <main>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Идея 1</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Идея 2</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Идея 3</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Идея 4</p>
            </div>
          </article>
        </NavLink>
        <NavLink to="/news/post1">
          <article>
            <div className="homeNewsContainer">
              <div className="homeNewsCover">
                <img src={NewsCover} alt="" />
              </div>
              <p>Идея 5</p>
            </div>
          </article>
        </NavLink>
      </main>
    </div>
  );
}

export default HomeIdeas;
