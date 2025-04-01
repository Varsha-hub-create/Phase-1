
import React, { useState, useEffect } from "react";
import './App.css';
const useUserGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const errorHandler = (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setError("User denied the request for Geolocation.");
          break;
        case err.POSITION_UNAVAILABLE:
          setError("Location information is unavailable.");
          break;
        case err.TIMEOUT:
          setError("The request to get user location timed out.");
          break;
        default:
          setError("An unknown error occurred.");
          break;
      }
    };

    navigator.geolocation.getCurrentPosition(success, errorHandler);
  }, []);

  return { location, error };
};

const LocationDisplay = () => {
  const { location, error } = useUserGeolocation();

  return (
    <div>
      <h2>User Location</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {location ? (
        <p>
          <strong>Latitude:</strong> {location.latitude}, <strong>Longitude:</strong> {location.longitude}
        </p>
      ) : (
        !error && <p>Fetching location...</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Geolocation Example</h1>
      <LocationDisplay />
    </div>
  );
};

export default App;
