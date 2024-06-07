import { PlannerWeatherCard } from "../components/PlannerWeatherCard";


export const Planner = ({ data }) => {

    return (
        <div className="min-h-screen bg-[url('/src/assets/event.jpg')] bg-gradient-to-br from-blue-400 to-purple-500 p-8">
            <h1 className="text-6xl font-extrabold text-center text-white mb-8">
                <span className="  bg-gradient-to-r from-blue-400 to-purple-500 text-black bg-clip-text">
                    Event Planner's Dashboard
                </span>
            </h1>
            <div className="max-w-md mx-auto mt-20">
                {data && <PlannerWeatherCard data={data} />}
            </div>
        </div>
    );
};

