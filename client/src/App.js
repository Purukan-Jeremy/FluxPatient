import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
import Dashboard from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
function App() {
  return (
    <div>
      <Dashboard />
      <Home />
      <Database />
    </div>
  );
}

export default App;
