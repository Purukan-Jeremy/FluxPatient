import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
import Queue from "./components/Queue/index.js";
import Dashboard from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
import SymptomChecker from "./components/Symptom/index.js";
import DoctorDetail from "./components/DoctorsProfile/index.js";
import Doctors from "./components/Doctors/index.js";
import Personal from "./components/Personal/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
    <div className="app">
      <Database />
      <Dashboard/>
      <Home />
      <Personal/>
      <Footer/>
      <SymptomChecker/>
    </div>
  );
}

export default App;
