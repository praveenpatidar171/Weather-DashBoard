import { TravellerWeatherCard } from "../components/TravellerWeatherCard";
export const Traveller = ({ data }) => {
  return (
    <div className="min-h-screen bg-[url('/src/assets/traveller.avif')] bg-gradient-to-br from-blue-400 to-purple-500 p-8">
      <h1 className="text-6xl font-extrabold text-center text-white mb-8">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          Traveller's Dashboard
        </span>
      </h1>
      <div className="max-w-md mx-auto">
        {data && <TravellerWeatherCard data={data} />}
      </div>
    </div>
  );
};
