import React from "react";
import DoctorsProfileStyle from "../../assets/styles/DoctorsProfileStyle.css"; // Ganti dengan path CSS yang sesuai
import gambar from "../../assets/img/gambar.jpg"; // ganti dengan path gambar yang sesuai

const DoctorDetail = () => {
  return (
    <div className="doctor-detail-page">
      <header className="doctor-header">
        <div className="logo">
          {" "}
          {/* Ganti dengan ikon/logo asli jika ada */}
          <img src="/logo192.png" alt="Logo" className="logo-icon" />
        </div>
        <input type="text" className="search-input" placeholder="Search..." />
        <div className="profile-icon"></div>
      </header>

      <h2 className="page-title">Meet Our Doctors</h2>

      <div className="doctor-card-detail">
        <img src={gambar} alt="dr. Steve Umbas" className="doctor-photo" />
        <div className="doctor-info-detail">
          <h3>dr. Steve Umbas</h3>
          <p>Dermatologist</p>
          <p>Tuesday - Friday 10.00 AM - 16.00 PM</p>
          <p className="status">Available</p>
          <button className="appointment-button">Make an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
