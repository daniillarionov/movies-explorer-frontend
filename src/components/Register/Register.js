import { React, useState, useEffect } from "react";
import PageWithLogin from "../PageWithLogin/PageWithLogin";
import Input from "../Input/Input";

function Register({
  onRegister,
  setErrorLogin,
  errorLogin,
  onEmailChange,
  setIsRenderFooter,
  onPasswordChange,
  email,
  password,
  handleLogoClick,
  setIsRenderHeader,
}) {
  useEffect(() => {
    setIsRenderHeader(true);
    setIsRenderFooter(true);
  }, []);
  const [name, setName] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
    setErrorLogin("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, email, password });
  }
  const [isValid, setIsValid] = useState(false);
  return (
    <PageWithLogin
      title="Добро пожаловать!"
      submitText="Зарегистрироваться"
      alreadyText="Уже зарегистрированы?"
      alreadyButtonText="Войти"
      login={false}
      onSubmit={handleSubmit}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      handleLogoClick={handleLogoClick}
      setIsValid={setIsValid}
      isValid={isValid}
      errorLogin={errorLogin}
    >
      <Input
        title="Имя"
        setIsValid={setIsValid}
        type="text"
        name="name"
        minLength="2"
        onChange={handleNameChange}
      />
    </PageWithLogin>
  );
}
export default Register;
