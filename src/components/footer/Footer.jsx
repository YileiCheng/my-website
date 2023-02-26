import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        YILEI CHENG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience"></a>Experience
        </li>
        <li>
          <a href="#services"></a>Services
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#testimonials"></a>Testimonials
        </li>
        <li>
          <a href="#contact"></a>Contact
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <RxTwitterLogo />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Yilei's website. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
