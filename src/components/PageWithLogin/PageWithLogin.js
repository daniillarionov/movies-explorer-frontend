import React from "react";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

function PageWithLogin({
  title,
  children,
  submitText,
  alreadyText,
  alreadyButtonText,
  login,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  handleLogoClick,
  setIsValid,
  isValid,
  errorLogin,
}) {
  const disabled = isValid ? false : true;
  return (
    <div className="page-with-login__container">
      <Logo handleLogoClick={handleLogoClick} />
      <h2 className="page-with-login__title">{title}</h2>
      <form className="form page-with-login__form" onSubmit={onSubmit}>
        <section className="page-with-login__form-section">
          {children}
          <Input
            setIsValid={setIsValid}
            title="E-mail"
            type="email"
            name="email"
            onChange={onEmailChange}
          />
          <Input
            setIsValid={setIsValid}
            passClass="input__password"
            title="Пароль"
            type="password"
            name="password"
            minLength="8"
            onChange={onPasswordChange}
          />
          <p className="page-with-login__error-login">{errorLogin}</p>
          <button
            type="submit"
            className="page-with-login__submit"
            disabled={disabled}
          >
            [{submitText}]
          </button>
        </section>
      </form>
      <div className="page-with-login__already">
        <p className="page-with-login__text">{alreadyText} </p>
        <form
          action={
            login
              ? "https://srcmovies.nomoredomains.rocks/signup"
              : "https://srcmovies.nomoredomains.rocks/signin"
          }
        >
          <button type="submit" className="page-with-login__link">
            {alreadyButtonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PageWithLogin;
