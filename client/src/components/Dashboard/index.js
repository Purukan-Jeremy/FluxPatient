import React from 'react';
import "../../App.css";

function Dashboard() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://via.placeholder.com/30" // Replace this with your logo URL
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
      </div>
    </div>
  );
}

export default Dashboard;
