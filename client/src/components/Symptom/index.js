import React, { useState } from "react";
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
    {
      name: "Sepsis",
      color: "#FEDFFE",
      image: Sepsis,
      align: "right",
      description:
        "Sepsis is a life-threatening condition that occurs when the body's response to an infection causes widespread inflammation. It can lead to organ failure and requires immediate medical treatment.",
    },
    {
      name: "Diarrhea",
      color: "#C48888",
      image: Diarhea,
      align: "left",
      description:
        "Diarrhea is a condition characterized by frequent, loose, or watery stools. It is commonly caused by infections, food poisoning, or other digestive disorders, and can lead to dehydration if not treated.",
    },
  ];

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="symptom-checker">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                {hoveredIndex === index && (
                  <div className="symptom-description">
                    {symptom.description}
                  </div>
                )}
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
