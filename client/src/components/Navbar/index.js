import React from "react";
import "../../App.css";
import fluxLogo from "../../assets/img/fluxLogo.png";
import userLogo from "../../assets/img/userLogo.png";

const styles = {
  searchIconSvg: {
    width: "18px",
    height: "18px",
  },
  userIcon: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  userIconSvg: {
    width: "40px",
    height: "40px",
  },
}
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={fluxLogo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">FluxPatient |</span>
      </div>
      <div className="navbar-center">
        <a href="/seek-doctors" className="navbar-link">
          Seek Doctors
        </a>
        <a href="/queue" className="navbar-link">
          Queue
        </a>
        <a href="/check-symptoms" className="navbar-link">
          Check Symptoms
        </a>
      </div>
      <div style={styles.userIcon}>
            <svg viewBox="0 0 24 24" fill="black" style={styles.userIconSvg}>
              <path
                d="M12 12c2.21 0 4-1.79 
                4-4s-1.79-4-4-4-4 1.79-4 4 
                1.79 4 4 4zm0 2c-2.67 0-8 
                1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
    </div>
  );
}

export default Navbar;
