import { useNavigate } from "react-router-dom";
import { WeatherCard } from "../components/WeatherCard";
import { InteractiveMap } from "../components/InteractiveMap";

export const HomePage =  ({ data, setLocation }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Weather Dashboard</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter location"
        />
      </div>
      {data && <WeatherCard data={data} />}
      <InteractiveMap location={data ? data.name : "New Delhi"} />
      <h2 className="text-4xl font-bold text-center mt-4 mb-4">See More Specifically</h2>
      <div className="flex justify-around mb-4">
        <button className="p-1 bg-slate-500 text-white border border-gray-300 rounded" onClick={() => navigate('/traveller')}>Traveller</button>
        <button className="p-1 bg-slate-500 text-white border border-gray-300 rounded" onClick={() => navigate('/farmer')}>Farmer</button>
        <button className="p-1 bg-slate-500 text-white border border-gray-300 rounded" onClick={() => navigate('/planner')}>Event Planner</button>
      </div>
    </div>
  );
};
