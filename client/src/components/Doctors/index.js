import React from "react";
import DoctorsComponent from "../../assets/styles/DoctorsComponent.css";
import gambar from "../../assets/img/gambar.jpg";
import Navbar from "../Navbar";

const doctors = [
  {
    name: "dr. Richard Lee",
    specialty: "DERMATOLOGIST",
    image: gambar,
  },
  {
    name: "dr. Theo M. Hudi",
    specialty: "GASTROENTEROLOGIST",
    image: gambar,
  },
  {
    name: "dr. Alimni Anaya",
    specialty: "NEUROLOGY",
    image: gambar,
  },
  {
    name: "dr. Hilda Pilar",
    specialty: "CARDIOLOGIST",
    image: gambar,
  },
  {
    name: "dr. Marcel Sornpton",
    specialty: "OPHTALMOLOGIST",
    image: gambar,
  },
  {
    name: "dr. Matthew Molekulanang",
    specialty: "PEDIATRICIAN",
    image: gambar,
  },
  {
    name: "dr. Pichan Molekilang",
    specialty: "PSYCHIATRIST",
    image: gambar,
  },
  {
    name: "dr. Harah Away",
    specialty: "ONCOLOGIST",
    image: gambar,
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
      <Navbar />

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
