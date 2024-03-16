// import doYouHaveAnIdea from "../../shared/images/doYouHaveAnIdea.png";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

function DoYouHaveAnIdea() {
  return (
    <div className={styles.doYouHaveAnIdea}>
      <nav className={styles.nav}>
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
                        <a href="#">
                          Подумайте над формулировками. Есть вопросы - пишите на
                          адрес projects@rosseti-sib.ru
                        </a>
                      </li>
                      <li>
                        <a href="#">Решение содержит технические разработки?</a>
                        <ul>
                          <li>
                            <a href="#">
                              Реализация идеи малозатратна, либо возможна
                              организационными мероприятиями?
                            </a>
                            <ul>
                              <li>
                                <NavLink
                                  to="/idea-create"
                                  className={styles.btn}
                                >
                                  Оформите предложение по улучшению
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/idea-create"
                                  className={styles.btn}
                                >
                                  Оформите рациоанализаторское предложение
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/idea-create" className={styles.btn}>
                              Оформите рациоанализаторское предложение
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/idea-create" className={styles.btn}>
                      Оформите лучшую практику
                    </NavLink>
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
