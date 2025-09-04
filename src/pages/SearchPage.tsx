import React, { useState, useMemo } from "react";
import shopItems, { type ShopItem } from "../data/shopItems";
import buffs, { type Buff } from "../data/buffs";
import cars, { type Car } from "../data/cars";
import ShopCard from "../components/ShopCard";
import BuffCard from "../components/BuffCard";
import CarCard from "../components/CarCard";
import "./SearchPage.css";


function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return {
      shop: shopItems.filter(
        (item: ShopItem) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      ),
      buffs: buffs.filter(
        (buff: Buff) =>
          buff.name.toLowerCase().includes(term) ||
          buff.description.toLowerCase().includes(term)
      ),
      cars: cars.filter(
        (car: Car) =>
          car.name.toLowerCase().includes(term) ||
          car.description.toLowerCase().includes(term)
      ),
    };
  }, [searchTerm]);

  const hasResults =
    filteredItems.shop.length +
      filteredItems.buffs.length +
      filteredItems.cars.length >
    0;

  return (
    <div className="search-page">
      {/* Строка поиска */}
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Результаты */}
      {searchTerm && hasResults && (
        <div className="search-results">
          {filteredItems.shop.map((item: ShopItem) => (
            <div key={item.id} className="search-card">
              <ShopCard item={item} />
            </div>
          ))}

          {filteredItems.buffs.map((buff: Buff) => (
            <div key={buff.id} className="search-card">
              <BuffCard buff={buff} />
            </div>
          ))}

          {filteredItems.cars.map((car: Car) => (
            <div key={car.id} className="search-card">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}

      {/* Если ничего не найдено */}
      {searchTerm && !hasResults && (
        <p className="no-results">Ничего не найдено</p>
      )}
    </div>
  );
}

export default SearchPage;

