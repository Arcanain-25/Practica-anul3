import React, { useState, useMemo } from "react";
import shopItems from "../data/shopItems";
import buffs from "../data/buffs";
import cars from "../data/cars";
import ShopCard from "../components/ShopCard";
import BuffCard from "../components/BuffCard";
import CarCard from "../components/CarCard";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return {
      shop: shopItems.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      ),
      buffs: buffs.filter(
        (buff) =>
          buff.name.toLowerCase().includes(term) ||
          buff.description.toLowerCase().includes(term)
      ),
      cars: cars.filter(
        (car) =>
          car.name.toLowerCase().includes(term) ||
          car.description.toLowerCase().includes(term)
      ),
    };
  }, [searchTerm]);

  const hasResults =
    filteredItems.shop.length + filteredItems.buffs.length + filteredItems.cars.length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #0a001a, #1a002e)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "2px solid #ff69b4",
          width: "300px",
          outline: "none",
          color: "#000",
          marginBottom: "15px",
        }}
      />

      {/* Результаты */}
      {searchTerm && hasResults && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "30px 30px", // увеличенное расстояние между карточками
            justifyContent: "center",
            maxWidth: "900px",
            transition: "all 0.3s ease",
          }}
        >
          {filteredItems.shop.map((item) => (
            <div key={item.id} style={{ padding: "5px", transition: "all 0.3s ease" }}>
              <ShopCard item={item} />
            </div>
          ))}

          {filteredItems.buffs.map((buff) => (
            <div key={buff.id} style={{ padding: "5px", transition: "all 0.3s ease" }}>
              <BuffCard buff={buff} />
            </div>
          ))}

          {filteredItems.cars.map((car) => (
            <div key={car.id} style={{ padding: "5px", transition: "all 0.3s ease" }}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}

      {/* Сообщение, если ничего не найдено */}
      {searchTerm && !hasResults && (
        <p style={{ color: "#fff", fontSize: "14px", marginTop: "10px" }}>Ничего не найдено</p>
      )}
    </div>
  );
}

export default SearchPage;
