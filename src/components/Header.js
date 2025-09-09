import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Catalog de Mașini</h1>
      </div>
      <div className="header-right">
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
