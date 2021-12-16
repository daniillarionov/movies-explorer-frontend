import React from "react";

function Popup({isOpen, onClose}) {

  return <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
      <form
              className="popup__form"
              action="http://localhost:3000"
              target="_blank"
            >
              <button
                type="submit"
                className="popup__button"
              >
                Главная
              </button>
            </form>
            <form
              className="popup__form"
              action="http://localhost:3000/movies"
              target="_blank"
            >
              <button
                type="submit"
                className="popup__button"
              >
                Фильмы
              </button>
            </form>
            <form
              className="popup__form"
              action="http://localhost:3000/saved-movies"
              target="_blank"
            >
              <button
                type="submit"
                className="popup__button"
              >
                Сохранённые фильмы
              </button>
            </form>
      </div>
      <form
              className="popup__form"
              action="http://localhost:3000/profile"
              target="_blank"
            >
              <button
                type="submit"
                className="popup__profile-button"
              >
                Аккаунт
              </button>               
            </form>   
            <button
          type="button"
          aria-label="Закрыть"
          className="popup__close"
          onClick={onClose}
        />
  </div>;
}
export default Popup;