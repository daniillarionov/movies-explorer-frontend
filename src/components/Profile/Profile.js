import React from "react";

function Profile() {
  
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__info">
        <div className="profile__container">
          <p className="profile__item">Имя</p>
          <p className="profile__value">Виталий</p>
        </div>
        <div className="profile__container">
          <p className="profile__item">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </div>
      </div>
      <form>
      <button type="submit"  className="profile__edit-button">Редактировать</button>
      </form>
      <form action="https://srcmovies.nomoredomains.rocks/signin">
      <button type="submit"  className="profile__quit-button">Выйти из аккаунта</button>
      </form>
    </div>
  );
}
export default Profile;