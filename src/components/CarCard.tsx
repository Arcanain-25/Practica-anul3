import React from "react";
import "./CarCard.css";

// Тип для машины
export interface Car {
  id: number;
  name: string;
  year: number;
  rarity: string;
  power: number;
  magic: number;
  description: string;
  img: string;
}

// Тип для пропсов
interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.img} alt={car.name} className="car-img" />
      <h2 className="car-title">{car.name}</h2>
      <p>
        <b>Год:</b> {car.year}
      </p>
      <p>
        <b>Редкость:</b> {car.rarity}
      </p>
      <p>
        <b>Сила:</b> {car.power}
      </p>
      <p>
        <b>Магия:</b> {car.magic}
      </p>
      <p className="car-description">{car.description}</p>

      {/* магические частицы */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={`car-particle car-particle-${i}`} />
      ))}
    </div>
  );
};

export default CarCard;
