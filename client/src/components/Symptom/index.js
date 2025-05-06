import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SymptomChecker.css";
import Fever from "../../assets/img/Fever.png";
import Chestpain from "../../assets/img/ChestPain.png";
import Pneumonia from "../../assets/img/Pneunomia.png";
import Stroke from "../../assets/img/Stroke.png";
import Influenza from "../../assets/img/Influenza.png";
import Asthma from "../../assets/img/Asthma.png";
import Malaria from "../../assets/img/Malaria.png";
import Gerd from "../../assets/img/Gerd.png";
import Sepsis from "../../assets/img/Sepsis.png";
import Diarhea from "../../assets/img/Diarhea.png";
import Header from "../Header";

const SymptomChecker = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/symptoms");
        setSymptoms(response.data.data);
      } catch (error) {
        console.error("Error fetching symptoms:", error);
      }
    };

    fetchSymptoms();
  }, []);

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.nama_gejala.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getImagePath = (name) => {
    switch (name.toLowerCase()) {
      case "fever":
        return Fever;
      case "pneumonia":
        return Pneumonia;
      case "stroke":
        return Stroke;
      case "influenza":
        return Influenza;
      case "asthma":
        return Asthma;
      case "chest pain":
        return Chestpain;
      case "malaria":
        return Malaria;
      case "gerd":
        return Gerd;
      case "sepsis":
        return Sepsis;
      case "diarrhea":
        return Diarhea;
      default:
        return null;
    }
  };

  const leftAlignSymptoms = [
    "pneumonia",
    "influenza",
    "chest pain",
    "gerd",
    "diarrhea",
  ];

  return (
    <div className="symptom-checker">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        title="Check Your Symptom"
      />
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
                style={{ backgroundColor: symptom.color || "#F5F5F5" }}
              >
                {hoveredIndex === index && (
                  <div className="symptom-description">{symptom.deskripsi}</div>
                )}
                <img
                  src={getImagePath(symptom.nama_gejala)}
                  alt={symptom.nama_gejala}
                  className="symptom-image"
                />
                <div
                  className={`symptom-name ${
                    leftAlignSymptoms.includes(
                      symptom.nama_gejala.toLowerCase()
                    )
                      ? "left"
                      : "right"
                  }`}
                >
                  {symptom.nama_gejala}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ width: "100%", paddingLeft: "670px" }}>
            No symptoms found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
