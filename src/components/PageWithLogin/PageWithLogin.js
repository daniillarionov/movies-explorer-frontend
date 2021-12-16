import React from "react";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

function PageWithLogin({
    title,
    children,
    submitText,
    alreadyText,
    alreadyButtonText,
    onSubmit,
    login
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
    return (
        <div className="page-with-login__container">
          <Logo/>
          <h2 className="page-with-login__title">{title}</h2>
          <form
            onSubmit={handleSubmit}
            className="page-with-login__form"
          >
            <section className="page-with-login__form-section"> 
            {children}
            <Input title="E-mail" type="email" name="email"/>
            <Input passClass="input__password" title="Пароль" type="password" name="password" minLength="8"/>
              <button type="submit" className="page-with-login__submit">{submitText}</button>
            </section>
          </form>
          <div className="page-with-login__already">
            <p className="page-with-login__text">{alreadyText} </p>
            <form action={login ? "https://srcmovies.nomoredomains.rocks/signup" : "https://srcmovies.nomoredomains.rocks/signin"}>
            <button className="page-with-login__link" >{alreadyButtonText} </button>
            </form>
          </div>
        </div>
    );
  }
  export default PageWithLogin;