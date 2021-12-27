import React from "react";
import Logo from "../Logo/Logo";

function Header({
  loggedIn,
  onClick,
  handleMoviesClick,
  handleLogoClick,
  handleSavedMoviesClick,
  handleAccountClick,
  handleSignupClick,
  handleSigninClick,
}) {
  return (
    <header className="header">
      {loggedIn ? (
        <>
          <div className="header__container">
            <Logo handleLogoClick={handleLogoClick} />
            <button
              type="button"
              className="header__button header__button_movies"
              onClick={handleMoviesClick}
            >
              Фильмы
            </button>
            <button
              type="button"
              className="header__button header__button_saved-movies"
              onClick={handleSavedMoviesClick}
            >
              Сохранённые фильмы
            </button>
          </div>
          <div className="header__container">
            <button
              type="button"
              className="header__button header__button_me"
              onClick={handleAccountClick}
            >
              Аккаунт
            </button>
            <div className="header__profile"></div>
          </div>
          <button
            type="submit"
            className="header__button-menu"
            onClick={onClick}
          ></button>
        </>
      ) : (
        <>
          <Logo handleLogoClick={handleLogoClick} />
          <div className="header__container">
            <button
              type="button"
              className="header__button"
              onClick={handleSignupClick}
            >
              Регистрация
            </button>
            <button
              type="button"
              className="header__button header__button_signin"
              onClick={handleSigninClick}
            >
              Войти
            </button>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
