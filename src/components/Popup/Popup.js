import { React, useEffect } from "react";

function Popup({ isOpen, onClose, children }) {
  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.target.classList.contains("popup_opened")) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("click", handleEscClose);
    };
  }, [isOpen]);
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>{children}</div>
  );
}
export default Popup;
