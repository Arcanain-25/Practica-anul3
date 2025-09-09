import React from "react";
import "../styles/Hero.css";

function Hero() {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Descoperă mașina visurilor tale</h1>
        <p>Explorează catalogul nostru cu cele mai bune oferte și modele.</p>
        <button className="hero-button" onClick={scrollToCatalog}>
          Vezi catalogul
        </button>
      </div>
      <div className="hero-image-container">
        <div className="hero-abstract-shape"></div>
        <img
          src="/images/hero.png"
          alt="Mașină"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
