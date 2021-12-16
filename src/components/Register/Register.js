import React from "react";
import PageWithLogin from "../PageWithLogin/PageWithLogin";
import Input from "../Input/Input";

function Register() {
  
  return (
    <PageWithLogin
    title="Добро пожаловать!"
    submitText="Зарегистрироваться"
    alreadyText="Уже зарегистрированы?"
    alreadyButtonText="Войти"
    login={false}
    >
    <Input title="Имя" type="text" name="name" minLength="2"/>
    </PageWithLogin>
  );
}
export default Register;