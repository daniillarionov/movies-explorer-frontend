import React from "react";
import Logo from "../Logo/Logo";

function Header({ loggedIn, onClick }) {
  return (
    <header className="header">   
     
      {loggedIn ? (
        <>        
        <Logo />  
        <div className="header__container">
          <form
            className="header__form"
            action="https://srcmovies.nomoredomains.rocks/signup"
            target="_blank"
          >
            <button type="submit" className="header__button">
              Регистрация
            </button>
          </form>
          <form action="https://srcmovies.nomoredomains.rocks/signin" target="_blank">
            <button
              type="submit"
              className="header__button header__button_signin"
            >
              Войти
            </button>
          </form>
        </div>
        </>
      ) : (
        <>
         
        <div className="header__container">
        <Logo /> 
            <form
              className="header__form-movies"
              action="https://srcmovies.nomoredomains.rocks/movies"
              target="_blank"
            >
              <button
                type="submit"
                className="header__button header__button_movies"
              >
                Фильмы
              </button>
            </form>
            <form className="header__form-movies" action="https://srcmovies.nomoredomains.rocks/saved-movies" target="_blank">
              <button
                type="submit"
                className="header__button header__button_saved-movies"
              >
                Сохранённые фильмы
              </button>
            </form>
          </div>
          <div className="header__container">
            <form
              className="header__form-movies"
              action="https://srcmovies.nomoredomains.rocks/profile"
              target="_blank"
            >
              <button
                type="submit"
                className="header__button header__button_me"
              >
                Аккаунт
              </button>              
            </form>     
            <div className="header__profile"></div>       
          </div>
          <button
                type="submit"
                className="header__button-menu"
                onClick={onClick}
              ></button>  
        </>
      )}
    </header>
  );
}
export default Header;
