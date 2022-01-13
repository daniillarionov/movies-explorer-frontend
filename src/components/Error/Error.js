import React from "react";
import Popup from "../Popup/Popup";

function Error({ onClose, isOpen, error }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="error__container">
        <p className="error__status">{error}</p>
        <p className="error__message">Произошла ошибка</p>
        <button type="button" onClick={onClose} className="error__button">
          Назад
        </button>
      </div>
    </Popup>
  );
}
export default Error;
