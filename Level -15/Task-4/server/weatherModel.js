import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  description: String,
  date: Date,
});

// Important: explicitly set collection name to 'weathers'
const Weather = mongoose.model("Weather", weatherSchema, "weathers");

export default Weather;
