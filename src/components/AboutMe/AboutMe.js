import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";

function AboutMe() {
  return (
    <div className="about-me">
      <a name="about-me"></a>
      <InfoTitle title="Студент" />
      <div className="about-me__description">
        <div className="about-me__container">
          <h3 className="about-me__name">Даниил</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 29 лет</h4>
          <p className="about-me__text">
            Я родился в Воткинске, сейчас живу в Ижевске, закончил машиностроительный факульттет ИжГТУ. Я состою в сборной нашей республики по спортивному туризму, а ещё увлекаюсь баскетболом и сноубордом. Недавно начал кодить. Поработал во многих организациях на менеджерских должностях После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="about-me__link"
            >
              Facebook
            </a>
            <a
              href="https://github.com/daniillarionov"
              target="_blank"
              className="about-me__link"
            >
              Github
            </a>
          </div>
        </div>
        <div className="about-me__photo"></div>
      </div>
    </div>
  );
}
export default AboutMe;
