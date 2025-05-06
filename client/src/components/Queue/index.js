import React from "react";
import drtirtahome from "../../assets/img/drtirtahome.png";
import banner from "../../assets/img/banner.png";
import Navbar from "../Navbar";
import Home from "../Home";
import Footer from "../Footer";
import "../../assets/styles/QueueComponent.css";
import { useNavigate } from "react-router-dom";

const queueData = [
  {
    name: "Carlota Montelli",
    dob: "30 April 2003",
    gender: "Female",
    phone: "+6285931644355",
    treatment: "Dental checkup",
    description: "I'm having toothache every night",
    queueNumber: 13,
    timeEstimation: "03:23",
  },
];

const Queue = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="queue-header">
        <h2>Your Queue</h2>
        {queueData.map((data, idx) => (
          <div className="queue-card" key={idx}>
            <div className="queue-details">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Date of birth:</strong> {data.dob}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Phone number:</strong> {data.phone}
              </p>
              <p>
                <strong>Treatment:</strong> {data.treatment}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
              <p>
                <strong>Time estimation:</strong> {data.timeEstimation}
              </p>
            </div>
            <div className="queue-number">
              <p>Queue number</p>
              <span>{data.queueNumber}</span>
            </div>
          </div>
        ))}
        {queueData.map((data, idx) => (
          <div className="queue-card" key={idx}>
            <div className="queue-details">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Date of birth:</strong> {data.dob}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Phone number:</strong> {data.phone}
              </p>
              <p>
                <strong>Treatment:</strong> {data.treatment}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
              <p>
                <strong>Time estimation:</strong> {data.timeEstimation}
              </p>
            </div>
            <div className="queue-number">
              <p>Queue number</p>
              <span>{data.queueNumber}</span>
            </div>
          </div>
        ))}
        {queueData.map((data, idx) => (
          <div className="queue-card" key={idx}>
            <div className="queue-details">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Date of birth:</strong> {data.dob}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Phone number:</strong> {data.phone}
              </p>
              <p>
                <strong>Treatment:</strong> {data.treatment}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
              <p>
                <strong>Time estimation:</strong> {data.timeEstimation}
              </p>
            </div>
            <div className="queue-number">
              <p>Queue number</p>
              <span>{data.queueNumber}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Queue;
