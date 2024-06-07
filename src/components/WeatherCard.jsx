import React, { useEffect, useState } from "react";
import axios from "axios";

export const WeatherCard = ({ data }) => {
    const [uvIndex, setUVIndex] = useState(null);
    const [aqi, setAQI] = useState(null);

    useEffect(() => {
        const fetchAdditionalData = async () => {
            try {
                const uvResponse = await axios.get(`https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${import.meta.env.VITE_API_KEY}`);
                setUVIndex(uvResponse.data.value);

                const aqiResponse = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${import.meta.env.VITE_API_KEY}`);
                setAQI(aqiResponse.data.list[0].main.aqi);
            } catch (error) {
                console.error("Error fetching additional weather data:", error);
            }
        };


        fetchAdditionalData();
    }, [data.coord.lat, data.coord.lon]);

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white">{data.name}</h2>
            <div className="flex items-center justify-between mt-4">
                <p className="text-5xl font-bold text-white">{Math.round(data.main.temp)}°C</p>
                <p className="text-lg text-white">{data.weather[0].description}</p>
            </div>
            <div className="mt-6">
                <div className="flex items-center">
                    <span className="text-sm text-white font-semibold mr-2">Feels Like:</span>
                    <span className="text-lg text-white">{data.main.feels_like}°C</span>
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-sm text-white font-semibold mr-2">Humidity:</span>
                    <span className="text-lg text-white">{data.main.humidity}%</span>
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-sm text-white font-semibold mr-2">Wind Speed:</span>
                    <span className="text-lg text-white">{data.wind.speed} m/s</span>
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-sm text-white font-semibold mr-2">Sunrise:</span>
                    <span className="text-lg text-white">{sunrise}</span>
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-sm text-white font-semibold mr-2">Sunset:</span>
                    <span className="text-lg text-white">{sunset}</span>
                </div>
                <div className="mt-6">
                    <p className="text-white text-sm font-semibold mb-2">Additional Weather Details:</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-white">
                            <span className="text-sm font-semibold mr-2">UV Index:</span>
                            <span className="text-lg">{uvIndex}</span>
                        </div>
                        <div className="flex items-center text-white">
                            <span className="text-sm font-semibold mr-2">AQI:</span>
                            <span className="text-lg">{aqi}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

