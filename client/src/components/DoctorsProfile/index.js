import React from "react";
import { useLocation } from "react-router-dom";
import "../../assets/styles/DoctorsProfileStyle.css";
import Header from "../Header";

const DoctorDetail = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return (
      <div className="doctor-detail-page">
        <Header title="Meet Our Doctors" />
        <p style={{ padding: "20px" }}>No doctor data available.</p>
      </div>
    );
  }

  return (
    <div className="doctor-detail-page">
      <Header title="Meet Our Doctors" />

      <div className="doctor-card-detail">
        <img src={doctor.image} alt={doctor.name} className="doctor-photo" />
        <div className="doctor-info-detail">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
          <p>Tuesday - Friday 10.00 AM - 16.00 PM</p>
          <p className="status">Available</p>
          <button className="appointment-button">Make an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
