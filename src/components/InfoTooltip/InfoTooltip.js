import React from "react";
import Popup from "../Popup/Popup";

function InfoTooltip({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen}
    onClose={onClose}>
      <div className="imfo-tooltip__container">
        <div className="imfo-tooltip__icon"></div>
        <h2 className="imfo-tooltip__title">Информация успешно изменена</h2>
        <button
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
          className="popup__close"
        />
      </div>
    </Popup>
  );
}
export default InfoTooltip;
