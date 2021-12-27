import { React, useEffect, useState } from "react";
import PageWithLogin from "../PageWithLogin/PageWithLogin";

function Login({
  onLogin,
  errorLogin,
  setIsRenderFooter,
  email,
  password,
  onEmailChange,
  setIsRenderHeader,
  onPasswordChange,
  handleLogoClick,
}) {
  useEffect(() => {
    setIsRenderHeader(true);
    setIsRenderFooter(true);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }
  const [isValid, setIsValid] = useState(false);
  return (
    <PageWithLogin
      title="Рады видеть!"
      submitText="Войти"
      alreadyText="Ещё не зарегистрированы?"
      alreadyButtonText="Регистрация"
      onSubmit={handleSubmit}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      login={true}
      email={email}
      password={password}
      handleLogoClick={handleLogoClick}
      setIsValid={setIsValid}
      isValid={isValid}
      errorLogin={errorLogin}
    />
  );
}
export default Login;
