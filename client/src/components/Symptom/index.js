import React, { useState } from "react";
import "./SymptomChecker.css";
import Logo from "../../assets/img/fluxLogo.png";
import Fever from "../../assets/img/Fever.png";
import Chestpain from "../../assets/img/ChestPain.png";
import Pneumonia from "../../assets/img/Pneunomia.png";
import Stroke from "../../assets/img/Stroke.png";
import Influenza from "../../assets/img/Influenza.png";
import Asthma from "../../assets/img/Asthma.png";
import Malaria from "../../assets/img/Malaria.png";
import Gerd from "../../assets/img/Gerd.png";

const SymptomChecker = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const symptoms = [
    {
      name: "Fever",
      color: "#B0D2D4",
      image: Fever,
      align: "right",
      description:
        "Fever is a temporary increase in your body temperature, often due to an infection. It is a common sign that your immune system is fighting off illness.",
    },
    {
      name: "Pneumonia",
      color: "#7B9AFD",
      image: Pneumonia,
      align: "left",
      description:
        "Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus, causing cough with phlegm, fever, and difficulty breathing.",
    },
    {
      name: "Stroke",
      color: "#7276B5",
      image: Stroke,
      align: "right",
      description:
        "Stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients, which can lead to brain damage.",
    },
    {
      name: "Influenza",
      color: "#64549B",
      image: Influenza,
      align: "left",
      description:
        "Influenza is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness and at times can lead to hospitalization or even death.",
    },
    {
      name: "Asthma",
      color: "#C9C6FD",
      image: Asthma,
      align: "right",
      description:
        "Asthma is a condition in which your airways narrow, swell, and produce extra mucus, making breathing difficult and triggering coughing, wheezing, and shortness of breath.",
    },
    {
      name: "Chest Pain",
      color: "#F9EFF0",
      image: Chestpain,
      align: "left",
      description:
        "Chest pain can be a symptom of many serious conditions, including heart attack, angina, and lung problems. It should always be evaluated by a healthcare professional.",
    },
    {
      name: "Malaria",
      color: "#FEF898",
      image: Malaria,
      align: "right",
      description:
        "Malaria is a serious disease caused by a parasite and transmitted through the bite of infected mosquitoes. It causes chills, fever, and flu-like symptoms, and can be life-threatening if untreated.",
    },
    {
      name: "Gerd",
      color: "#FEA497",
      image: Gerd,
      align: "left",
      description:
        "GERD (Gastroesophageal Reflux Disease) is a chronic digestive disorder where stomach acid frequently flows back into the tube connecting your mouth and stomach, causing irritation and discomfort.",
    },
  ];

  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="symptom-checker">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <img src={Logo} alt="Flux Logo" style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 
                  16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 
                  5.91 16 9.5 16c1.61 0 3.09-.59 
                  4.23-1.57l.27.28v.79l5 4.99L20.49 
                  19l-4.99-5zm-6 0C7.01 14 5 11.99 5 
                  9.5S7.01 5 9.5 5 14 7.01 14 
                  9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>
          <div className="user-icon">
            <svg viewBox="0 0 24 24" fill="black">
              <path d="M12 12c2.21 0 4-1.79 
                4-4s-1.79-4-4-4-4 1.79-4 4 
                1.79 4 4 4zm0 2c-2.67 0-8 
                1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
        <h1 className="header-title">Check Your Symptom</h1>
      </div>

      {/* Symptom Grid */}
      <div className="symptom-grid">
        {filteredSymptoms.length > 0 ? (
          filteredSymptoms.map((symptom, index) => (
            <div
              key={index}
              className="symptom-card-wrapper"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="symptom-card"
                style={{ backgroundColor: symptom.color }}
              >
                <img
                  src={symptom.image}
                  alt={symptom.name}
                  className="symptom-image"
                />
                <div
                  className={`symptom-name ${
                    symptom.align === "right" ? "right" : "left"
                  }`}
                >
                  {symptom.name}
                </div>
              </div>
              {hoveredIndex === index && (
                <div className="symptom-description">
                  {symptom.description}
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{width: "100%",paddingLeft: "670px" }}>
            No symptoms found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
