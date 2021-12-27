import Popup from "../Popup/Popup";

function PopupSideMenu({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen}>
      <div className="popup__section">
        <div className="popup__container">
          <form
            className="popup__form"
            action="https://srcmovies.nomoredomains.rocks"
            target="_blank"
          >
            <button type="submit" className="popup__button">
              Главная
            </button>
          </form>
          <form
            className="popup__form"
            action="https://srcmovies.nomoredomains.rocks/movies"
            target="_blank"
          >
            <button type="submit" className="popup__button">
              Фильмы
            </button>
          </form>
          <form
            className="popup__form"
            action="https://srcmovies.nomoredomains.rocks/saved-movies"
            target="_blank"
          >
            <button type="submit" className="popup__button">
              Сохранённые фильмы
            </button>
          </form>
        </div>
        <form
          className="popup__form"
          action="https://srcmovies.nomoredomains.rocks/profile"
          target="_blank"
        >
          <button type="submit" className="popup__profile-button">
            Аккаунт
          </button>
        </form>
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close"
          onClick={onClose}
        />
      </div>
    </Popup>
  );
}
export default PopupSideMenu;
