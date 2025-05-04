import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/index.js";
import Doctors from "./components/Doctors/index.js";
import Queue from "./components/Queue/index.js";
import Symptom from "./components/Symptom/index.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Queue" element={<Queue />} />
        <Route path="/Symptom" element={<Symptom />} />
      </Routes>
    </Router>
  );
};

export default App;
