import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">{`© ${new Date().getFullYear()} `}</p>
        <nav className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
          <a href="https://github.com" target="_blank" className="footer__link">
            Github
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="footer__link"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
