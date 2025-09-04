import React from "react";
import shopItems from "../data/shopItems";
import ShopCard, { ShopItem } from "../components/ShopCard";
import "./ShopPage.css";

const ShopPage: React.FC = () => {
  return (
    <div className="shop-page">
      <div className="shop-grid">
        {shopItems.map((item: ShopItem) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

