import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import Footer from "../Footer";
import "../../assets/styles/QueueComponent.css";

const Queue = () => {
  const location = useLocation();
  const [queueData, setQueueData] = useState([]);

  // ⏫ Load dari localStorage saat pertama kali mount
  useEffect(() => {
    const savedQueue = JSON.parse(localStorage.getItem("queue")) || [];
    const now = Date.now();

    // Filter hanya antrian yang belum kadaluwarsa
    const validQueue = savedQueue.filter((item) => item.expireTime > now);
    setQueueData(validQueue);
  }, []);

  // ⬇️ Tambahkan data baru jika ada dari halaman sebelumnya
  useEffect(() => {
    if (location.state?.pasien) {
      const data = location.state.pasien;
      const now = Date.now();
      const timeEstimation = 5 * 10 * 1000;
      const expireTime = now + timeEstimation;

      const newEntry = {
        ...data,
        queueNumber: queueData.length + 1,
        expireTime,
      };

      const updatedQueue = [...queueData, newEntry];
      setQueueData(updatedQueue);
      localStorage.setItem("queue", JSON.stringify(updatedQueue));
    }
  }, [location.state]);

  // ⏳ Timer update setiap detik (countdown dan hapus expired)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setQueueData((prevData) => {
        const filtered = prevData
          .map((item) => ({
            ...item,
            remaining: Math.max(0, item.expireTime - now),
          }))
          .filter((item) => item.expireTime > now);

        localStorage.setItem("queue", JSON.stringify(filtered));
        return filtered;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper format waktu mundur
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
                <strong>Name:</strong> {data.nama}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Phone number:</strong> {data.hp}
              </p>
              <p>
                <strong>Treatment:</strong> {data.treatment}
              </p>
              <p>
                <strong>Description:</strong> {data.deskripsi}
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
