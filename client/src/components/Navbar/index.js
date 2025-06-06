import React from "react";
import "../../App.css";
import fluxLogo from "../../assets/img/fluxLogo.png";
import { useNavigate } from "react-router-dom";

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
};

function Navbar() {
  const navigate = useNavigate();

  const seekDoctors = () => {
    navigate("/Doctors");
  };

  const queue = () => {
    navigate("/Queue");
  };

  const checkSymptoms = () => {
    navigate("/Symptom");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={fluxLogo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">FluxPatient |</span>
      </div>
      <div className="navbar-center">
        <button className="navbar-link" onClick={seekDoctors}>
          Seek Doctors
        </button>
        <button className="navbar-link" onClick={queue}>
          Queue
        </button>
        <button className="navbar-link" onClick={checkSymptoms}>
          Check Symptoms
        </button>
      </div>
    </div>
  );
}

export default Navbar;
