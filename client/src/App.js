import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
import Dashboard from "./components/Dashboard/index.js";
import Doctors from "./components/Doctors/index.js";
function App() {
  return (
    <div>
      <Doctors />
    </div>
  );
}

export default App;
