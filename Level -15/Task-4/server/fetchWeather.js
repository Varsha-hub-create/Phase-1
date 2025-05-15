import axios from 'axios';
import dotenv from 'dotenv';
import Weather from './weatherModel.js';
import './db.js';

dotenv.config();

export async function fetchAndSaveWeather() {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${process.env.CITY}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);

        const weather = new Weather({
            city: process.env.CITY,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            condition: data.weather[0].description
        });

        await weather.save();
        console.log("Weather data saved:", weather);
    } catch (error) {
        console.error("Error fetching weather:", error.message);
    }
}
