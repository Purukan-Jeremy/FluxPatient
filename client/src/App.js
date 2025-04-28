import React, { useEffect, useState } from "react";
import Database from "./config/database/index.js";
import "./App.css";
import Dashboard from "./components/Dashboard/index.js";
function App() {

  return (
    <div>
      <Dashboard/>
      <Database/>
    </div>
  );
}

export default App;
