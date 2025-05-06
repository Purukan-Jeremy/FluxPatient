import React, { useEffect, useState } from "react";
import drtirtahome from "../../assets/img/drtirtahome.png";
import banner from "../../assets/img/banner.png";
import Navbar from "../Navbar";
import Home from "../Home";
import Footer from "../Footer";
import "../../assets/styles/QueueComponent.css";
import { useLocation } from "react-router-dom";

const Queue = () => {
  const location = useLocation();
  const [queueData, setQueueData] = useState([]);

  useEffect(() => {
    if (location.state?.pasien) {
      const data = location.state.pasien;
      const now = Date.now();
      const timeEstimation = 5 * 60 * 1000; // 5 menit
      const expireTime = now + timeEstimation;

      const queueEntry = {
        ...data,
        queueNumber: queueData.length + 1,
        expireTime,
      };

      setQueueData((prev) => [...prev, queueEntry]);
    }
  }, [location.state]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setQueueData((prevData) =>
        prevData
          .map((item) => ({
            ...item,
            remaining: Math.max(0, item.expireTime - now),
          }))
          .filter((item) => item.expireTime > now)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const min = String(Math.floor(totalSec / 60)).padStart(2, "0");
    const sec = String(totalSec % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

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
                <strong>Time estimation:</strong>{" "}
                {formatTime(data.remaining || data.expireTime - Date.now())}
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
