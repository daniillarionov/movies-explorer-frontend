import { useState, useEffect } from "react";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import validator from 'validator'

function Profile({
  handleButtonQuitClick,
  handleUpdateUser,
  setIsRenderFooter,
}) {
  useEffect(() => {
    setIsRenderFooter(true);
  }, []);
  

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [isValid, setIsValid] = useState(true);
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  function handleChangeName(e) {
    setName(e.target.value);
    setErrorName(e.target.validationMessage);
    setIsValid(e.target.closest(".profile__form").checkValidity());
  }
  function handleChangeEmail(e) {
    const email = e.target.value
    if (!validator.isEmail(email)) {
      setErrorEmail("Введите корректный адрес электронной почты");
      setIsValid(false)
    } else {
      setErrorEmail("")
      setIsValid(true)
    }
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, email });
  }
  const difference = name === currentUser.name && email === currentUser.email;
  const disabled = isValid && !difference ? false : true;
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__info">
          <div className="profile__container">
            <p className="profile__item">Имя</p>
            <input
              type="text"
              required
              minLength="2"
              className="profile__value"
              value={name || ""}
              onChange={handleChangeName}
            />
          </div>
          <div className="profile__container">
            <p className="profile__item">E-mail</p>
            <input
              type="email"
              required
              className="profile__value"
              value={email || ""}
              onChange={handleChangeEmail}
            />
          </div>
        </div>
        <p className="profile__error">{errorName}</p>
        <p className="profile__error">{errorEmail}</p>
        <button
          type="submit"
          disabled={disabled}
          className="profile__edit-button"
        >
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__quit-button"
        onClick={handleButtonQuitClick}
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}
export default Profile;
