import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    umur: "",
    hp: "",
    gender: "",
    treatment: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pasienPayload = {
      nama: formData.nama,
      alamat: formData.alamat,
      umur: parseInt(formData.umur, 10), // Konversi umur ke number
      hp: formData.hp,
      gender: formData.gender,
      treatment: formData.treatment,
      deskripsi: formData.deskripsi,
    };

    console.log("Payload pasien yang dikirim:", pasienPayload); // Debugging

    try {
      const pasienResponse = await fetch("http://localhost:5000/api/pasien", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pasienPayload),
      });

      if (!pasienResponse.ok) {
        const errorText = await pasienResponse.text();
        throw new Error(errorText);
      }

      const pasienResult = await pasienResponse.json();
      console.log("Respons dari backend:", pasienResult); // Debugging
      alert("Kamu Telah Ditambahkan Di antrian!");
      navigate("/Queue", { state: { pasien: formData } });
    } catch (error) {
      console.error("Error submitting data:", error.message);
      alert(`Failed to submit: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h1>Personal Information</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nama">Name</label>
        <input
          type="text"
          id="nama"
          placeholder="Write your name"
          value={formData.nama}
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender</label>
        <select id="gender" value={formData.gender} onChange={handleChange}>
          <option value="" disabled>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="alamat">Address</label>
        <input
          type="text"
          id="alamat"
          placeholder="Write your address"
          value={formData.alamat}
          onChange={handleChange}
        />

        <label htmlFor="umur">Age</label>
        <input
          type="number"
          id="umur"
          placeholder="How old are you?"
          value={formData.umur}
          onChange={handleChange}
        />

        <label htmlFor="hp">Phone Number</label>
        <input
          type="text"
          id="hp"
          placeholder="Write your phone number"
          value={formData.hp}
          onChange={handleChange}
        />
        <label htmlFor="treatment">Treatment Type</label>
        <select
          id="treatment"
          value={formData.treatment}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select treatment type
          </option>
          <option value="checkup">Regular Checkup</option>
          <option value="emergency">Emergency</option>
          <option value="followup">Follow-up Visit</option>
          <option value="surgery">Surgery</option>
        </select>

        <label htmlFor="deskripsi">Deskription</label>
        <textarea
          id="deskripsi"
          placeholder="Enter description of the treatment"
          value={formData.deskripsi}
          onChange={handleChange}
          rows={5}
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
