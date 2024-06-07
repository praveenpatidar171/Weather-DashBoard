
export const PlannerWeatherCard = ({ data }) => {
    return (
        <div>
            <div className=" bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">

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
                </div>
            </div>
        </div>
    )
}