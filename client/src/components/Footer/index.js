import React from "react";
import "../../assets/styles/FooterComp.css";
import Logo from "../../assets/img/fluxLogo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="FluxPatient Logo" className="footer-logo-img" />
        <h3 className="footer-logo-text">FluxPatient</h3>
      </div>
      <p>
        Contact us: <br /> +6289 9833 2906
      </p>

      <div className="footer-socials">
        <div className="social-item">
          <div className="icon-circle">
            <FaInstagram />
          </div>
          <p>@Fluxypatient</p>
        </div>
        <div className="social-item">
          <div className="icon-circle">
            <FaFacebookF />
          </div>
          <p>@siloambersama</p>
        </div>
      </div>

      <p className="footer-note">
        Currently being develop for better user experiences
      </p>
    </footer>
  );
};

export default Footer;
