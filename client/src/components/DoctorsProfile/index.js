import React from "react";
import DoctorsProfileStyle from "../../assets/styles/DoctorsProfileStyle.css"; // Ganti dengan path CSS yang sesuai
import gambar from "../../assets/img/gambar.jpg"; // ganti dengan path gambar yang sesuai
import Header from "../Header";

const DoctorDetail = () => {
  return (
    <div className="doctor-detail-page">
      <Header title="Meet Our Doctors" />

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
