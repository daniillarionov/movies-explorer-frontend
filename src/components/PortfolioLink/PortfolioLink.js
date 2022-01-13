import React from "react";

function PortfolioLink({ text, link }) {
  return (
    <a href={link} target="_blank" className="portfolio-link">
      <p className="portfolio-link__text">{text}</p>
      <div className="portfolio-link__arrow" />
    </a>
  );
}
export default PortfolioLink;
