import React from "react";
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";

function PopupMovieDelete({ isOpen }) {
  return (
    <Popup isOpen={isOpen}>
      <div className="popup-movie-delete__container">
          <Preloader/>          
          <h2 className="popup__title">Удаление...</h2>
      </div>
    </Popup>
  );
}
export default PopupMovieDelete;
