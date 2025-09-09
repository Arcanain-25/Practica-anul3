import React, { useState } from "react";
import "../styles/Helper.css";

function Helper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="helper-wrapper">
      <button className="helper-btn" onClick={() => setOpen(true)} title="Ajutor">
        ❓
      </button>

      {open && (
        <div className="helper-popup-overlay" onClick={() => setOpen(false)}>
          <div className="helper-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Cum să folosești site-ul</h2>
            <ul>
              <li>🔍 Caută mașini folosind bara de căutare de sus.</li>
              <li>⚙️ Folosește filtrele pentru an, preț, marcă sau combustibil.</li>
              <li>📷 Apasă pe o mașină pentru a vedea detalii.</li>
              <li>💳 Apasă pe „Rent now” pentru a rezerva o mașină.</li>
            </ul>
            <button className="close-btn" onClick={() => setOpen(false)}>Închide</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Helper;
