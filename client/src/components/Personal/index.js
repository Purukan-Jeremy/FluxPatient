import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Personal = () => {
  const [dob, setDob] = useState(null);

  return (
    <div className="form-container">
      <h1>Personal Information</h1>
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Write your name" />

        <label htmlFor="dob">Date of Birth</label>
        <div className="dob-input">
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
            className="date-picker-input"
            maxDate={new Date()}
          />
        </div>

        <label htmlFor="gender">Gender</label>
        <select id="gender">
          <option value="" disabled selected>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Write your address" />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" placeholder="Write your phone number" />

        <label htmlFor="treatment">Treatment</label>
        <select id="treatment">
          <option value="" disabled selected>
            Select your treatment
          </option>
          <option value="consultation">Consultation</option>
          <option value="follow-up">Follow-Up</option>
          <option value="emergency">Emergency</option>
          <option value="therapy">Therapy</option>
        </select>

        <label htmlFor="concern">What is Your Concern?</label>
        <textarea id="concern" placeholder="Description of your symptom"></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
