import React from "react";
import "../../assets/styles/QueueComponent.css";

const QueueCard = ({ data }) => {
  return (
    <div className="queue-card">
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
  );
};

export default QueueCard;
