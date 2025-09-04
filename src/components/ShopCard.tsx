import React from "react";
import "./ShopCard.css";

// Описываем тип для товара
export interface ShopItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Пропсы компонента
interface ShopCardProps {
  item: ShopItem;
}

const ShopCard: React.FC<ShopCardProps> = ({ item }) => {
  return (
    <div className="shop-card">
      <h3 className="shop-card-title">{item.name}</h3>
      <p className="shop-card-desc">{item.description}</p>
      <div className="shop-card-footer">
        <strong className="shop-card-price">{item.price}₽</strong>
        <button className="shop-card-btn">Купить</button>
      </div>
    </div>
  );
};

export default ShopCard;


