import React, { useState } from "react";
import DetailView from "./DetailView";

interface Car {
  make: string;
  model: string;
  year: number;
  city_mpg: number;
  highway_mpg: number;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  transmission: string;
  class: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative border-4 border-yellow-800 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] bg-repeat rounded-xl shadow-lg p-6 font-[Cinzel] text-yellow-100">
      {/* Заголовок */}
      <h2 className="font-bold text-2xl text-yellow-300 drop-shadow-md text-center">
        {car.make} {car.model}
      </h2>
      <p className="text-center text-sm italic mt-1">Год выпуска: {car.year}</p>

      {/* Кнопка */}
      <button
        onClick={() => setShowDetails(true)}
        className="block w-full mt-4 px-4 py-2 border-2 border-yellow-700 bg-gradient-to-b from-yellow-900 to-yellow-700 text-yellow-200 rounded-lg font-bold shadow-md hover:from-yellow-800 hover:to-yellow-600 hover:shadow-yellow-500/70 transition-all duration-300"
      >
        🔎 Посмотреть характеристики
      </button>

      {/* Окно деталей */}
      {showDetails && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="relative border-4 border-yellow-800 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] bg-cover rounded-xl shadow-2xl p-6 max-w-md">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-2 right-2 px-3 py-1 border-2 border-red-900 bg-red-800 text-yellow-200 rounded-lg font-bold hover:bg-red-700 transition"
            >
              ✖
            </button>
            <DetailView car={car} onClose={() => setShowDetails(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;

