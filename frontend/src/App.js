import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file if needed

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from Flask backend
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Fullstack App</h1>
        {data && <p>{data.message}</p>}
      </header>
    </div>
  );
};

export default App;
