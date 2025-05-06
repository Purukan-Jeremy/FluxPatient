// Treatment.js - Form untuk menambah pemeriksaan
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../Home";

const Treatment = () => {
  const navigate = useNavigate();

  // State untuk form data
  const [formData, setFormData] = useState({
    treatment: "",
    deskripsi: "",
    pasienId: "", // Akan diisi dari user yang login atau dipilih
  });

  // State untuk pesan status
  const [status, setStatus] = useState({
    message: "",
    type: "", // "success" atau "error"
  });

  // State untuk loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;

    // Mapping field form ke model backend
    let fieldName;
    if (id === "treatment_type") fieldName = "treatment";
    else if (id === "notes") fieldName = "deskripsi";
    else fieldName = id;

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Contoh: mengambil pasienId dari localStorage atau state global
    // Dalam aplikasi nyata, ini bisa dari user yang login atau dari dropdown pilihan
    const pasienId =
      localStorage.getItem("currentPasienId") || "645a9f4e5c6a3b2d1e0f9876"; // contoh ID

    try {
      console.log("Payload diterima di backend:", {
        treatment: formData.treatment,
        deskripsi: formData.deskripsi,
        pasienId: pasienId,
      });

      const response = await axios.post("http://localhost:5000/pemeriksaan", {
        treatment: formData.treatment,
        deskripsi: formData.deskripsi,
        pasienId: pasienId,
      });

      // Set status sukses
      setStatus({
        message: "Treatment berhasil ditambahkan!",
        type: "success",
      });

      // Reset form
      setFormData({
        treatment: "",
        deskripsi: "",
        pasienId: "",
      });

      // Redirect ke daftar pemeriksaan setelah berhasil
      setTimeout(() => {
        navigate("/pemeriksaan-list");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        message: error.response?.data?.message || "Gagal menambahkan treatment",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Home />
      <div className="form-container">
        <h1>Treatment Information</h1>

        {/* Tampilkan pesan status jika ada */}
        {status.message && (
          <div
            className={`status-message ${status.type}`}
            style={{
              padding: "10px 15px",
              marginBottom: "20px",
              borderRadius: "4px",
              backgroundColor:
                status.type === "success" ? "#d4edda" : "#f8d7da",
              color: status.type === "success" ? "#155724" : "#721c24",
            }}
          >
            {status.message}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="treatment_type">Treatment Type</label>
          <select
            id="treatment_type"
            value={formData.treatment}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select treatment type
            </option>
            <option value="Regular Checkup">Regular Checkup</option>
            <option value="Emergency">Emergency</option>
            <option value="Follow-up Visit">Follow-up Visit</option>
            <option value="Surgery">Surgery</option>
          </select>

          <label htmlFor="notes">Deskription</label>
          <textarea
            id="notes"
            placeholder="Enter description of the treatment"
            rows={5}
            required
            value={formData.deskripsi}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Treatment"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Treatment;
