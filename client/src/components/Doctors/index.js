import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import "./../../assets/styles/DoctorsComponent.css";
import DoctorImage from "./../../assets/img/gambar.jpg";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSchedule = (doctor) => {
    const doctorData = {
      name: doctor.nama,
      specialty: doctor.spesialis,
      schedule: doctor.jadwal_praktik,
      availability: doctor.status_ketersediaan,
      image: DoctorImage,
    };
    navigate("/DoctorsP", { state: { doctor: doctorData } });
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (doctor.nama &&
        doctor.nama.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (doctor.spesialis &&
        doctor.spesialis.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="page-container">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        title="Meet Our Doctors"
      />
      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <img
                src={DoctorImage}
                alt={doctor.nama}
                className="doctor-image"
              />
              <h3 className="doctor-name">{doctor.nama}</h3>
              <p className="doctor-specialty">{doctor.spesialis}</p>
              <button
                className="schedule-button"
                onClick={() => handleSchedule(doctor)}
              >
                Schedule
              </button>
            </div>
          ))
        ) : (
          <div className="not_found">
            <p className="no_doctor"> No doctors found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
