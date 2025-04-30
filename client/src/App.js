import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setbackendData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setbackendData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Daftar Pengguna</h1>
      <ul>
        {backendData.length > 0 ? (
          backendData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          <li>Loading data...</li>
        )}
      </ul>
    </div>
  );
}

export default App;
