import React from "react";

function Logo({ handleLogoClick }) {
  return (
    <button type="button" className="logo" onClick={handleLogoClick}></button>
  );
}
export default Logo;
