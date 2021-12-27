import React from "react";
import { useState } from "react";
function Input({
  title,
  type,
  name,
  passClass,
  minLength,
  onChange,
  setIsValid,
}) {
  const [errors, setErrors] = useState("");

  function handleChange(e) {
    setErrors(e.target.validationMessage);
    onChange(e);
    setIsValid(e.target.closest(".form").checkValidity());
  }

  return (
    <>
      <p className="input__subtitle">{title}</p>
      <input
        type={type}
        className={`input ${passClass} ${errors ? "input-invalid" : ""}`}
        name={name}
        required
        minLength={minLength}
        maxLength={30}
        onChange={handleChange}
      />
      <span className="input__input-error">{errors}</span>
    </>
  );
}
export default Input;
