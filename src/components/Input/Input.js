import React from "react";
function Input({
    title,
    type,
    name,
    passClass,
    minLength
}) {
    return (
        <>
              <p className="input__subtitle">{title}</p>
              <input
                type={type}
                className={`input ${passClass}`}
                name={name}
                required
                minLength={minLength}
                maxLength={30}
              />
              <span className="input__input-error" />
           </>   
    );
  }
  export default Input;