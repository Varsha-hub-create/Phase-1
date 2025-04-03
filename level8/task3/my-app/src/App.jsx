import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated Promise-based function
  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          // 80% success rate
          resolve({ id: 1, name: "Task Manager", status: "Active" });
        } else {
          reject(new Error("Failed to fetch data")); // Simulated failure
        }
      }, 2000);
    });
  }

  // Fetch data on component mount
  useEffect(() => {
    async function fetchDataAsync() {
      try {
        console.log("Fetching data...");
        const result = await fetchDataPromise();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>Task Manager App</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
