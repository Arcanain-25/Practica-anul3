"use client";

import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import Filters from "../components/Filters";
import { useTheme } from "../components/ThemeContext";

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

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchCars() {
      setLoading(true);
      setError("");

      try {
        if (search.trim() === "" && year.trim() === "") {
          setCars([]);
          setLoading(false);
          return;
        }

        const query = new URLSearchParams();
        if (search.trim() !== "") query.append("model", search.trim());
        if (year.trim() !== "" && !isNaN(Number(year))) {
          query.append("year", year.trim());
        }

        const res = await fetch(`/api/cars?${query.toString()}`);
        if (!res.ok) throw new Error("API error");

        const data: Car[] = await res.json();
        setCars(data);
      } catch (err) {
        console.error(err);
        setError("☠️ The ritual to unveil the chariots has failed!");
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [search, year]);

  return (
    <div
      className={`p-8 min-h-screen transition-colors duration-700 font-[Cinzel] ${
        theme === "aether"
          ? "bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-gray-900"
          : "bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-violet-200"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        📜 Catalogus Vehiculorum
      </h1>

      {/* Фильтры */}
      <div className="border border-violet-500/50 rounded-lg p-4 mb-6 bg-black/20 shadow-inner shadow-purple-900/50">
        <Filters search={search} setSearch={setSearch} year={year} setYear={setYear} />
      </div>

      {/* Сообщения */}
      {loading && (
        <p className="text-center text-purple-300 font-bold animate-pulse">
          ✨ Conjuring vehicles from the ether...
        </p>
      )}
      {error && (
        <p className="text-center text-red-400 font-bold animate-bounce">
          {error}
        </p>
      )}

      {/* Каталог */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cars.length > 0 ? (
          cars.map((car, idx) => (
            <CarCard key={`${car.make}-${car.model}-${car.year}-${idx}`} car={car} />
          ))
        ) : (
          !loading && (
            <p className="text-center text-violet-400 italic">
              🌌 The archives whisper: no relics of this kind exist...
            </p>
          )
        )}
      </div>
    </div>
  );
}
