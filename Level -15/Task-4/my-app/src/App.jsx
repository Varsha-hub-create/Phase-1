import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './App.css';

const App = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureTrend, setTemperatureTrend] = useState([]);

  const generateMockTemperatureData = (baseTemp) => {
    // Generate 7 fake hourly temperatures around the base temperature
    const hours = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM"];
    return hours.map((hour, index) => ({
      time: hour,
      temperature: Math.round(baseTemp + (Math.random() * 4 - 2)) // +/- 2°C variation
    }));
  };

  const search = async (city) => {
    if (!city) {
      alert("Enter a city name.");
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      if (!apiKey) {
        throw new Error("API key is undefined. Check your .env file.");
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      const temperature = Math.round(data.main.temp);

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature,
        location: data.name,
        iconUrl,
      });

      setTemperatureTrend(generateMockTemperatureData(temperature));
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      alert("Failed to fetch weather data.");
    }
  };

  useEffect(() => {
    search("Chennai"); // Default city
  }, []);

  return (
    <div className='weather-container'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Enter City Name' />
        <button onClick={() => search(inputRef.current.value)}>Search</button>
      </div>

      {weatherData ? (
        <div className="weather-card">
          <img src={weatherData.iconUrl} alt="Weather Icon" className='weather-icon' />
          <h2>{weatherData.temperature}°C</h2>
          <h3>{weatherData.location}</h3>
          <div className="weather-stats">
            <div>
              <strong>Humidity:</strong>
              <p>{weatherData.humidity}%</p>
            </div>
            <div>
              <strong>Wind:</strong>
              <p>{weatherData.windSpeed} km/h</p>
            </div>
          </div>

          {/* Weather Graph */}
          <div className='weather-graph'>
            <h4>Temperature Trend (Mock)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={temperatureTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis unit="°C" />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p className='no-data'>No weather data available</p>
      )}
    </div>
  );
};

export default App;
