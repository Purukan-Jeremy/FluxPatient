import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/DoctorsProfileStyle.css";
import Header from "../Header";

const DoctorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return (
      <div className="doctor-detail-page">
        <Header title="Meet Our Doctors" />
        <p style={{ padding: "20px" }}>No doctor data available.</p>
      </div>
    );
  }

  const handleAppointment = () => {
    navigate("/", { state: { doctor } });
  };

  const statusClass =
    doctor.availability?.toLowerCase() === "tersedia"
      ? "status available"
      : "status unavailable";

  return (
    <div className="doctor-detail-page">
      <Header title="Meet Our Doctors" />

      <div className="doctor-card-detail">
        <img src={doctor.image} alt={doctor.name} className="doctor-photo" />
        <div className="doctor-info-detail">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
          <p>{doctor.schedule}</p>
          <p className={statusClass}>{doctor.availability}</p>
          <button className="appointment-button" onClick={handleAppointment}>
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
