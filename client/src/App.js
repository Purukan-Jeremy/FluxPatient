import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      {(typeof backendData.users === "undefined") ?(
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>
            {user}</p>
        ))
      )}
    </div>
  );
}

export default App;
