import React from "react";
import InfoTitle from "../InfoTitle/InfoTitle";

function Techs() {
  return (
    <div className="techs">
      <a name="techs"></a>
      <InfoTitle title="Технологии"/>
      <div className="techs__container">
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p> 
            <ul className="techs__list">
              <li className="techs__card"><p >HTML</p></li>
              <li className="techs__card"><p >CSS</p></li>
              <li className="techs__card"><p >JS</p></li>
              <li className="techs__card"><p >React</p></li>
              <li className="techs__card"><p >Git</p></li>
              <li className="techs__card"><p >Express.js</p></li>
              <li className="techs__card"><p >mongoDB</p></li>
            </ul>
      </div> 
    </div>
  );
}
export default Techs;