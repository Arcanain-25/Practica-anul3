import React from "react";
import shopItems from "../data/shopItems";
import ShopCard from "../components/ShopCard";

function ShopPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #0a001a, #1a002e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "20px 25px", // 20px между рядами, 25px между колонками
          justifyContent: "center",
          maxWidth: "800px", // ограничиваем ширину для эстетики
        }}
      >
        {shopItems.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
