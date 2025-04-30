import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
// import Dashboard from "./components/Navbar/index.js";
// import Home from "./components/Home/index.js";
// import SymptomChecker from "./components/Symptom/index.js";
import Queue from "./components/Queue/index.js";
function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <Queue />
      {/* <Home/> */}
      <Database />
    </div>
  );
}

export default App;
