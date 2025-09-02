import { useEffect, useRef } from "react";

function CarCard({ car }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // создаём 5 магических частиц
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "6px";
      particle.style.height = "6px";
      particle.style.background = i % 2 === 0 ? "cyan" : "purple";
      particle.style.borderRadius = "50%";
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.pointerEvents = "none";
      particle.style.opacity = "0.8";
      particle.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
      card.appendChild(particle);

      // анимация движения вверх
      const animate = () => {
        particle.style.transform = `translate(${Math.random() * 20 - 10}px, -${20 + Math.random() * 10}px)`;
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        setTimeout(animate, 2000);
      };
      animate();
    }

  }, []);

  return (
    <div 
      ref={cardRef}
      style={{
        position: "relative",
        background: "rgba(30,20,40,0.95)",
        color: "#f5f5f5",
        border: "2px solid gold",
        borderRadius: "15px",
        padding: "16px",
        textAlign: "center",
        width: "300px",
        margin: "12px",
        boxShadow: "0 0 25px rgba(255,215,0,0.6)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
        fontFamily: "Georgia, serif",
        cursor: "pointer",
        overflow: "hidden", // частицы не вылетают за пределы карточки
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-20px) scale(1.08) rotateZ(2deg)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,215,0,0.9), 0 0 15px rgba(0,255,255,0.7)";
        e.currentTarget.style.filter = "drop-shadow(0 0 15px cyan) drop-shadow(0 0 10px purple)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1) rotateZ(0deg)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(255,215,0,0.6)";
        e.currentTarget.style.filter = "none";
      }}
    >
      <img 
        src={car.img} 
        alt={car.name} 
        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} 
      />
      <h2 style={{ color: "gold" }}>{car.name}</h2>
      <p><b>Год:</b> {car.year}</p>
      <p><b>Редкость:</b> {car.rarity}</p>
      <p><b>Сила:</b> {car.power}</p>
      <p><b>Магия:</b> {car.magic}</p>
      <p style={{ fontStyle: "italic" }}>{car.description}</p>
    </div>
  );
}

export default CarCard;
