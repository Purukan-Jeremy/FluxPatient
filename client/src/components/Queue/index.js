
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import Footer from "../Footer";
import "../../assets/styles/QueueComponent.css";

const Queue = () => {
  const location = useLocation();
  const [queueData, setQueueData] = useState([]);

  // Effect untuk memperbarui waktu mundur
  useEffect(() => {
    const timer = setInterval(() => {
      setQueueData(prevData => 
        prevData.map(item => {
          const remaining = item.expireTime - Date.now();
          // Hapus item jika waktu sudah habis
          if (remaining <= 0) {
            return null;
          }
          return {
            ...item,
            remaining
          };
        }).filter(Boolean) // Hapus item yang null
      );
    }, 1000); // Update setiap 1 detik

    // Cleanup interval ketika component unmount
    return () => clearInterval(timer);
  }, []);
// ...existing code...

useEffect(() => {
  if (location.state?.pasien) {
    const data = location.state.pasien;
    const now = Date.now();
    const timeEstimation = 5 * 10 * 1000; // 5 menit dalam milliseconds
    const expireTime = now + timeEstimation;

    const createNewPasien = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pasien', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            expireTime
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create pasien');
        }

        const newEntry = {
          ...data,
          queueNumber: queueData.length + 1,
          expireTime,
          remaining: timeEstimation
        };

        const updatedQueue = [...queueData, newEntry];
        setQueueData(updatedQueue);
        localStorage.setItem("queue", JSON.stringify(updatedQueue));
      } catch (error) {
        console.error('Error creating pasien:', error);
      }
    };

    createNewPasien();
  }
}, [location.state]);


// ...existing code...

  // Helper format waktu mundur
  const formatTime = (ms) => {
    if (ms <= 0) return "00:00";
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
