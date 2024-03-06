import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aom Kham Phaung</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:aomkhamphaung.dev@gmail.com"
            target="blank"
            className="footer__social-link"
          >
            <i class="uil uil-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/aom-kham-phaung-903291242"
            target="blank"
            className="footer__social-link"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/aomkhamphaung"
            target="blank"
            className="footer__social-link"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; aomkhamphaung | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
