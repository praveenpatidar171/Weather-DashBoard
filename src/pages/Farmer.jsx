import { FarmerWeatherCard } from "../components/FarmerWeatherCard";

export const Farmer = ({ data }) => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-[url('/src/assets/farmer.jpeg')] bg-gradient-to-br from-blue-400 to-purple-500 p-8">
      <h1 className="text-6xl font-extrabold text-center text-white mb-8">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-black bg-clip-text">
          Farmer's Dashboard
        </span>
      </h1>
      <div className="max-w-md mx-auto mt-20">
        {data && <FarmerWeatherCard data={data} />}
      </div>
    </div>
  );
};
