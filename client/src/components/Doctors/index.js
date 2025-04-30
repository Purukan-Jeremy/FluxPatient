import React from "react";
import DoctorsComponent from "../../assets/styles/DoctorsComponent.css";

const doctors = [
  {
    name: "dr. Richard Lee",
    specialty: "DERMATOLOGIST",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Theo M. Hudi",
    specialty: "GASTROENTEROLOGIST",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Alimni Anaya",
    specialty: "NEUROLOGY",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Hilda Pilar",
    specialty: "CARDIOLOGIST",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Marcel Sornpton",
    specialty: "OPHTALMOLOGIST",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Matthew Molekulanang",
    specialty: "PEDIATRICIAN",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Pichan Molekilang",
    specialty: "PSYCHIATRIST",
    image: "./assets/gambar.jpg",
  },
  {
    name: "dr. Harah Away",
    specialty: "ONCOLOGIST",
    image: "./assets/gambar.jpg",
  },
];

const DoctorCard = ({ name, specialty, image }) => (
  <div className="doctor-card">
    <img src={image} alt={name} className="doctor-image" />
    <h3 className="doctor-name">{name}</h3>
    <p className="doctor-specialty">{specialty}</p>
    <button className="schedule-button">Schedule</button>
  </div>
);

const Doctors = () => {
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">+ </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-icon" />
      </header>

      <h2 className="page-title">Meet Our Doctors</h2>

      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            specialty={doc.specialty}
            image={doc.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
