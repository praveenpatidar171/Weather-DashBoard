// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Farmer } from "./pages/Farmer";
import { Traveller } from "./pages/Traveller";
import { Planner } from "./pages/Planner";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New Delhi');
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        setWeatherData(currentWeatherResponse.data);

      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={weatherData} setLocation={setLocation} />} />
          <Route path="/farmer" element={<Farmer data={weatherData} />} />
          <Route path="/traveller" element={<Traveller data={weatherData} />} />
          <Route path="/planner" element={<Planner data={weatherData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
