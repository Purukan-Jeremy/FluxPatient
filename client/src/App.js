import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Doctors from "./components/Doctors/index.js";
import Queue from "./components/Queue/index.js";
import Symptom from "./components/Symptom/index.js";
const App = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/Queue" element={<Queue/>} />
          <Route path="/Symptom" element={<Symptom/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App


