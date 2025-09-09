import React, { useState, useEffect, useRef } from "react";
import "../styles/Filters.css";

function Filters({ onFilter }) {
  const [showMenu, setShowMenu] = useState(false);
  const [filters, setFilters] = useState({
    year: "",
    priceRange: "",
    brand: [],
    fuel: [],
  });

  const dropdownRef = useRef(null);

  const brands = [
    "BMW",
    "Audi",
    "Mercedes",
    "Volkswagen",
    "Renault",
    "Toyota",
    "Ford",
    "Skoda",
    "Peugeot",
    "Honda",
    "Nissan",
    "Tesla",
  ];

  const fuels = ["Benzină", "Diesel", "Hybrid", "Electric"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const newValues = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newValues };
    });
  };

  const applyFilters = () => {
    onFilter(filters);
    setShowMenu(false);
  };

  const resetFilters = () => {
    const empty = { year: "", priceRange: "", brand: [], fuel: [] };
    setFilters(empty);
    onFilter(empty);
  };

  return (
    <div className="filters" ref={dropdownRef}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="filter-button"
        title="Filtre"
      >
        ⚙️
      </button>

      {showMenu && (
        <div className="filter-menu">
          <div className="filter-group">
            <label>An minim:</label>
            <input
              type="number"
              placeholder="ex: 2015"
              value={filters.year}
              onChange={(e) =>
                setFilters({ ...filters, year: e.target.value })
              }
            />
          </div>


          <div className="filter-group">
            <label>Preț maxim (€):</label>
            <input
              type="number"
              placeholder="ex: 30000"
              value={filters.priceRange}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            />
          </div>


          <div className="filter-group">
            <label>Brand:</label>
            <select
              multiple
              value={filters.brand}
              onChange={(e) => {
                const selected = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setFilters({ ...filters, brand: selected });
              }}
              style={{ width: "100%", height: "80px" }}
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

    
          <div className="filter-group">
            <label>Combustibil:</label>
            <div>
              {fuels.map((fuel) => (
                <label key={fuel} className="checkbox">
                  <input
                    type="checkbox"
                    checked={filters.fuel.includes(fuel)}
                    onChange={() => handleCheckboxChange("fuel", fuel)}
                  />
                  {fuel}
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button className="apply-btn" onClick={applyFilters}>
              Aplică filtre
            </button>
            <button className="reset-btn" onClick={resetFilters}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
