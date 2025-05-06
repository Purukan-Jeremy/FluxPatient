import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/index.js";
import Doctors from "./components/Doctors/index.js";
import Queue from "./components/Queue/index.js";
import Symptom from "./components/Symptom/index.js";
import DoctorsP from "./components/DoctorsProfile/index.js";
import Personal from "./components/Personal/index.js"; // Import the Personal component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Queue" element={<Queue />} />
        <Route path="/Symptom" element={<Symptom />} />
        <Route path="/DoctorsP" element={<DoctorsP />} />
        <Route path="/Personal" element={<Personal />} />{" "}
        {/* Redirect to Dashboard for any other route */}
      </Routes>
    </Router>
  );
};

export default App;
