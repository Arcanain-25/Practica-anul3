function ShopCard({ item }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #8B005D, #C71585)",
        border: "1.5px solid #FF69B4",
        borderRadius: "12px",
        padding: "10px",
        width: "140px",
        textAlign: "center",
        color: "#fff",
        boxShadow: "0 0 8px rgba(255, 105, 180, 0.7)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 105, 180, 1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 8px rgba(255, 105, 180, 0.7)";
      }}
    >
      <h3 style={{ marginBottom: "6px", fontSize: "14px", fontWeight: "bold" }}>
        {item.name}
      </h3>
      <p style={{ marginBottom: "8px", fontSize: "12px" }}>{item.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: "13px" }}>{item.price}₽</strong>
        <button
          style={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "3px 6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "11px",
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export default ShopCard;
