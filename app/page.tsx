"use client";

import { useState } from "react";
import cars from "./data/cars";
import { useTheme } from "./components/ThemeContext";
import { LocalCarCard } from "./components/LocalCarCard";
import Link from "next/link";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [year, setYear] = useState("");
  const [minPower, setMinPower] = useState("");
  const [maxPower, setMaxPower] = useState("");
  const [minMagic, setMinMagic] = useState("");
  const [maxMagic, setMaxMagic] = useState("");

  // Фильтрация
  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesRarity = rarity === "All" || car.rarity === rarity;
    const matchesYear = !year || car.year.toString() === year;
    const matchesPower =
      (!minPower || car.power >= parseInt(minPower)) &&
      (!maxPower || car.power <= parseInt(maxPower));
    const matchesMagic =
      (!minMagic || car.magic >= parseInt(minMagic)) &&
      (!maxMagic || car.magic <= parseInt(maxMagic));

    return (
      matchesSearch &&
      matchesRarity &&
      matchesYear &&
      matchesPower &&
      matchesMagic
    );
  });

  return (
    <div
      className={`p-8 min-h-screen transition-colors duration-700 font-[Cinzel] ${
        theme === "aether"
          ? "bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-gray-900"
          : "bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-violet-200"
      }`}
    >
      {/* Заголовок + кнопка темы */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-4xl font-extrabold text-center flex-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-indigo-300 drop-shadow-[0_0_15px_rgba(180,120,255,0.8)]">
          🚗 Моя коллекция
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-gradient-to-b from-purple-800 to-indigo-900 text-violet-200 shadow-lg hover:shadow-[0_0_15px_rgba(180,120,255,0.9)] transition"
        >
          {theme === "aether" ? "🌑 Enter the Void" : "🌞 Call the Light"}
        </button>
      </div>

      {/* Панель фильтров */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
        {/* Поиск */}
        <input
          type="text"
          placeholder="🔍 Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black"
        />

        {/* Редкость */}
        <select
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black"
        >
          <option value="All">Все редкости</option>
          <option value="Common">Common</option>
          <option value="Uncommon">Uncommon</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
          <option value="Mythic">Mythic</option>
        </select>

        {/* Год */}
        <input
          type="number"
          placeholder="📅 Год"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black w-24"
        />

        {/* Мощность */}
        <input
          type="number"
          placeholder="⚡ Мин. мощн."
          value={minPower}
          onChange={(e) => setMinPower(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black w-28"
        />
        <input
          type="number"
          placeholder="⚡ Макс. мощн."
          value={maxPower}
          onChange={(e) => setMaxPower(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black w-28"
        />

        {/* Магия */}
        <input
          type="number"
          placeholder="✨ Мин. магия"
          value={minMagic}
          onChange={(e) => setMinMagic(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black w-28"
        />
        <input
          type="number"
          placeholder="✨ Макс. магия"
          value={maxMagic}
          onChange={(e) => setMaxMagic(e.target.value)}
          className="px-4 py-2 rounded-lg border border-violet-400 bg-white/80 text-black w-28"
        />
      </div>

      {/* Сетка карточек */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <LocalCarCard key={car.id} car={car} />)
        ) : (
          <p className="text-lg opacity-70">🚫 Ничего не найдено</p>
        )}
      </div>

      {/* Кнопка перехода */}
      <div className="text-center mt-12">
        <Link
          href="/catalog"
          className="px-6 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          🚗 Перейти в поиск
        </Link>
      </div>
    </div>
  );
}
