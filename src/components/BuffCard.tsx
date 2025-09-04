import React from "react";
import "./BuffCard.css";

// Интерфейс баффа
export interface Buff {
  id: number;
  name: string;
  description: string;
  rarity?: string; // делаем необязательным, если не всегда есть
  img?: string;    // тоже опционально
}

// Пропсы компонента
interface BuffCardProps {
  buff: Buff;
}

const BuffCard: React.FC<BuffCardProps> = ({ buff }) => {
  return (
    <div className="buff-card">
      <h2 className="buff-title">{buff.name}</h2>
      <p className="buff-description">{buff.description}</p>

      {/* магические частицы */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={`particle particle-${i}`} />
      ))}
    </div>
  );
};

export default BuffCard;


  