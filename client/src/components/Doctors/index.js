import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import "./../../assets/styles/DoctorsComponent.css";
import Doctor from "./../../assets/img/gambar.jpg";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        console.log("Fetched doctors data:", response.data.data); // Debug log
        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    (doctor.nama && doctor.nama.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (doctor.spesialis && doctor.spesialis.toLowerCase().includes(searchTerm.toLowerCase()))
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
                src={Doctor}
                alt={doctor.nama}
                className="doctor-image"
              />
              <h3 className="doctor-name">{doctor.nama}</h3>
              <p className="doctor-specialty">{doctor.spesialis}</p>
              <button className="schedule-button">Schedule</button>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
