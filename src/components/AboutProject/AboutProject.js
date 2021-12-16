import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";

function AboutProject() {
  return (
    <div className="about-project">
      <a name="about-project"></a>
      <InfoTitle title="О проекте"/>
      <div className="about-project__description">
          <div>
              <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p> 
          </div>
          <div>
              <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься..</p> 
          </div>
      </div>   
      <div className="about-project__scheme">
            <div className="about-project__container about-project__container_backend">
                <p className="about-project__scale about-project__scale_green">1 неделя</p>
                <p className="about-project__scale about-project__scale_task">Back-end</p>
            </div>
            <div className="about-project__container about-project__container_frontend">
                <p className="about-project__scale about-project__scale_grey">4 недели</p>
                <p className="about-project__scale about-project__scale_task">Front-end</p>
            </div>
          </div>
    </div>
  );
}
export default AboutProject;