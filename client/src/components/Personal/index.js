import React from 'react';

const Personal = () => {
  return (
    <div className="form-container">
      <h1>Personal Information</h1>
      <form className="form">
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Write your name" />

        {/* Date of Birth */}
        <label htmlFor="dob">Date of Birth</label>
        <div className="dob-inputs">
          <input type="text" id="day" placeholder="DD" maxLength="2" />
          <input type="text" id="month" placeholder="MM" maxLength="2" />
          <input type="text" id="year" placeholder="YYYY" maxLength="4" />
        </div>

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender">
          <option value="" disabled selected>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Address */}
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Write your address" />

        {/* Phone Number */}
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" placeholder="Write your phone number" />

        {/* Treatment */}
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

        {/* Concern */}
        <label htmlFor="concern">What is Your Concern?</label>
        <textarea id="concern" placeholder="Description of your symptom"></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
