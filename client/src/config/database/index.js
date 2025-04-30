import React, { useEffect, useState } from "react";

function Database() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .then((data) => console.log(data));
  }, []);
  return (
    <div>

    </div>
  );
}

export default Database;
