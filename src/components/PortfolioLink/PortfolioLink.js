import React from "react";

function PortfolioLink({text, link}) {
  return (
    <div className="portfolio-link">
        <a href={link} target="_blank" className="portfolio-link__text" >{text}</a>
        <div className="portfolio-link__arrow"></div>
    </div>
    );
}
export default PortfolioLink;