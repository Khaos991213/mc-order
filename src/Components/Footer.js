import React from "react";
import "./Footer.css";
import { Button } from "./Buttons/Button";
import { Link } from "react-router-dom";
const link = "https://www.linkedin.com/in/martin-holt-lykke/";
function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
           
          </div>
          <small className="website-rights">Team 7 © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
