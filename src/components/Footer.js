import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>CarRent</h4>
          <p>© 2025 CarRent. Toate drepturile rezervate.</p>
          <p>🚗 Închirieri rapide și ușoare pentru orice model.</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📞 +373 600 000 00</p>
          <p>✉️ contact@carrent.md</p>
          <p>🌐 www.carrent.md</p>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <p>👍 Facebook</p>
          <p>📸 Instagram</p>
          <p>🐦 Twitter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
