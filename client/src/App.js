import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
import Queue from "./components/Queue/index.js";
import Dashboard from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
import SymptomChecker from "./components/Symptom/index.js";
import DoctorDetail from "./components/DoctorsProfile/index.js";
import Doctors from "./components/Doctors/index.js";

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <Queue />
      <Database />
      <Doctors />
    </div>
  );
}

export default App;
