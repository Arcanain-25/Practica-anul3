import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import BuffsPage from "./pages/BuffsPage";
import ShopPage from "./pages/ShopPage";
import SearchPage from "./pages/SearchPage"; // импорт поиска

function App() {
  return (
    <Router>
      <div style={{ 
        padding: "20px", 
        textAlign: "center", 
        background: "#0a0a12", 
        minHeight: "100vh", 
        color: "white" 
      }}>
        <h1 style={{ textShadow: "0 0 15px purple", fontFamily: "Georgia, serif" }}>
          ⚔️ RPG Каталог Машин
        </h1>

        <div style={{ margin: "20px 0" }}>
          <Link to="/" style={{ margin: "0 15px", color: "cyan", textDecoration: "none", fontWeight: "bold" }}>Каталог Машин</Link>
          <Link to="/buffs" style={{ margin: "0 15px", color: "magenta", textDecoration: "none", fontWeight: "bold" }}>Баффы</Link>
          <Link to="/shop" style={{ margin: "0 15px", color: "yellow", textDecoration: "none", fontWeight: "bold" }}>Магазин</Link>
          <Link to="/search" style={{ margin: "0 15px", color: "lime", textDecoration: "none", fontWeight: "bold" }}>Поиск</Link>
        </div>

        <Routes>
          <Route path="/" element={<CarsPage />} />
          <Route path="/buffs" element={<BuffsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/search" element={<SearchPage />} /> {/* новый маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


