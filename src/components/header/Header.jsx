import React from "react";
import "./header.css";
import CTA from "./CTA";
import BLU1 from "../../assets/Blu1-removebg.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yilei Cheng</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={BLU1} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
