import React from "react";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <PortfolioLink
        link="https://github.com/daniillarionov/how-to-learn"
        text="Статичный сайт"
      />
      <PortfolioLink
        link="https://daniillarionov.github.io/russian-travel/"
        text="Адаптивный сайт"
      />
      <PortfolioLink
        link="https://go.to.mesto.nomoredomains.work/sign-in"
        text="Одностраничное приложение"
      />
    </div>
  );
}
export default Portfolio;
