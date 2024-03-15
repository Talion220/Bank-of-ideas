// import doYouHaveAnIdea from "../../shared/images/doYouHaveAnIdea.png";
import "./doYouHaveAnIdea.scss";

function DoYouHaveAnIdea() {
  return (
    <div className="doYouHaveAnIdea">
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Идея по совершенствованию работы общества</a>
            <ul>
              <li>
                <a href="#">Вы уже применяете это в работе?</a>
                <ul>
                  <li>
                    <a href="#">
                      Можете описать результат и проблему, которую необходимо
                      сделать?
                    </a>
                    <ul>
                      <li>
                        <a href="#">Html</a>
                        <ul>
                          <li>
                            <a href="#">Css</a>
                            <ul>
                              <li>
                                <a href="#">Jquery</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Graph</a>
                    <ul>
                      <li>
                        <a href="#">Image</a>
                        <ul>
                          <li>
                            <a href="#">Design</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DoYouHaveAnIdea;
