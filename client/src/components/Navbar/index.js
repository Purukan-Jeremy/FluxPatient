import React from 'react';
import "../../App.css";
import fluxLogo from "../../assets/img/fluxLogo.png";
import userLogo from "../../assets/img/userLogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={fluxLogo}
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">FluxPatient |</span>
      </div>
      <div className="navbar-center">
        <a href="/seek-doctors" className="navbar-link">Seek Doctors</a>
        <a href="/queue" className="navbar-link">Queue</a>
        <a href="/check-symptoms" className="navbar-link">Check Symptoms</a>
      </div>
      <div className="navbar-right">
        <img
          src={userLogo}
          alt="User"
          className="user-logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
