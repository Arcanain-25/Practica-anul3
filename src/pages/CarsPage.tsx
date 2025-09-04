import React, { useState, useMemo } from "react";
import cars from "../data/cars";
import CarCard from "../components/CarCard";
import "./CarsPage.css";

// Тип машины
interface Car {
  id: number;
  name: string;
  description: string;
  rarity: string;
  year: number;
  power: number;
  magic: number;
  img: string;
  [key: string]: any; // если есть ещё поля
}

function CarsPage() {
  const [rarityFilter, setRarityFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Получаем уникальные редкости
  const rarities = useMemo<string[]>(() => {
    const unique = Array.from(new Set(cars.map((car: Car) => car.rarity)));
    return ["all", ...unique];
  }, []);

  // Фильтрация машин по редкости и поиску
  const filteredCars = useMemo<Car[]>(() => {
    return (cars as Car[]).filter((car) => {
      const matchesRarity =
        rarityFilter === "all" || car.rarity === rarityFilter;
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRarity && matchesSearch;
    });
  }, [rarityFilter, searchTerm]);

  return (
    <div className="cars-page">
      {/* Поле поиска и фильтр */}
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск машин..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="rarity">Фильтр по редкости: </label>
        <select
          id="rarity"
          value={rarityFilter}
          onChange={(e) => setRarityFilter(e.target.value)}
        >
          {rarities.map((r) => (
            <option key={r} value={r}>
              {r === "all" ? "Все" : r}
            </option>
          ))}
        </select>
      </div>

      {/* Сетка машин */}
      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="car-card-wrapper"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CarCard car={car} />
            </div>
          ))
        ) : (
          <p style={{ color: "#fff", marginTop: "20px" }}>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}

export default CarsPage;
