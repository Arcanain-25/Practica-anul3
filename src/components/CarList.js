import React, { useState } from "react";
import CarCard from "./CarCard";
import cars from "../data/cars";
import "../styles/CarList.css";
import Filters from "./Filters";

function CarList() {
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [showAll, setShowAll] = useState(false); 

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredCars(
      cars.filter((car) => car.name.toLowerCase().includes(value))
    );
  };

  const handleFilter = (filters) => {
    let result = cars;

    if (filters.year) {
      result = result.filter((car) => car.year >= parseInt(filters.year));
    }

    if (filters.priceRange) {
      result = result.filter(
        (car) =>
          parseInt(car.price.replace(/[^0-9]/g, "")) <=
          parseInt(filters.priceRange)
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((car) =>
        filters.brand.includes(car.name.split(" ")[0])
      );
    }

    if (filters.fuel.length > 0) {
      result = result.filter((car) => filters.fuel && filters.fuel.includes(car.fuel));
    }

    if (search) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCars(result);
  };


  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, 8);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Caută mașină..."
          value={search}
          onChange={handleSearch}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />
        <Filters onFilter={handleFilter} />
      </div>

      <div className="car-grid">
        {visibleCars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            year={car.year}
            price={car.price}
            image={car.image}
            details={car.details}
          />
        ))}
      </div>

      {filteredCars.length > 8 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Vezi mai puțin" : "Vezi mai mult"}
          </button>
        </div>
      )}
    </div>
  );
}

export default CarList;
