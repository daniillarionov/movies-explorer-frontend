import { React, useEffect } from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import AboutMe from "../AboutMe/AboutMe";

function Main({setIsRenderHeader, setIsRenderFooter}) {
  useEffect(() => {
    setIsRenderHeader(false)
    setIsRenderFooter(false)
  }, []);
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
export default Main;
