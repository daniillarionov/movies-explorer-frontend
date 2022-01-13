import { React, useEffect } from "react";

function PageNotFound({onClose, setIsRenderHeader, setIsRenderFooter}) {
    useEffect(() => {
        setIsRenderHeader(true);
        setIsRenderFooter(true);
      }, []);
  return (
      <div className="error__container">
        <p className="error__status">404</p>
        <p className="error__message">Страница не найдена</p>
        <button type="button" onClick={onClose} className="error__button">
          Назад
        </button>
      </div>
  );
}
export default PageNotFound;
