import React from "react";
import PageWithLogin from "../PageWithLogin/PageWithLogin";

function Login({onLogin}) {
  
  return (
    <PageWithLogin
    title="Рады видеть!"
    submitText="Войти"
    alreadyText="Ещё не зарегистрированы?"
    alreadyButtonText="Регистрация"
    onSubmit={onLogin}
    login={true}
    />
  );
}
export default Login;