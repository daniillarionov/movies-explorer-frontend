import React from "react";

function Error() {
  
  return (
    <div className="error__container">
        <p className="error__status">404</p>
        <p className="error__message">Страница не найдена</p>
        <button className="error__button">Назад</button>
    </div>
  );
}
export default Error;