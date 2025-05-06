import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/DoctorsComponent.css";
import gambar from "../../assets/img/gambar.jpg";
import Header from "../Header";

const doctors = [
  { name: "dr. Richard Lee", specialty: "DERMATOLOGIST", image: gambar },
  { name: "dr. Theo M. Hudi", specialty: "GASTROENTEROLOGIST", image: gambar },
  { name: "dr. Alimni Anaya", specialty: "NEUROLOGY", image: gambar },
  { name: "dr. Hilda Pilar", specialty: "CARDIOLOGIST", image: gambar },
  { name: "dr. Marcel Sornpton", specialty: "OPHTALMOLOGIST", image: gambar },
  { name: "dr. Matthew Molekulanang", specialty: "PEDIATRICIAN", image: gambar },
  { name: "dr. Pichan Molekilang", specialty: "PSYCHIATRIST", image: gambar },
  { name: "dr. Harah Away", specialty: "ONCOLOGIST", image: gambar },
];

const DoctorCard = ({ name, specialty, image, onSchedule }) => (
  <div className="doctor-card">
    <img src={image} alt={name} className="doctor-image" />
    <h3 className="doctor-name">{name}</h3>
    <p className="doctor-specialty">{specialty}</p>
    <button className="schedule-button" onClick={onSchedule}>
      Schedule
    </button>
  </div>
);

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSchedule = (doctor) => {
    navigate("/DoctorsProfile", { state: { doctor } });
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        title="Meet Our Doctors"
      />

      <div className="doctors-grid">
        {filteredDoctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            specialty={doc.specialty}
            image={doc.image}
            onSchedule={() => handleSchedule(doc)}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
