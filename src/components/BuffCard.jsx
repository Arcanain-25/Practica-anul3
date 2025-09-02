function BuffCard({ buff }) {
    return (
      <div style={{
        position: "relative",
        background: "linear-gradient(145deg, #2b002b, #4b004b)",
        color: "cyan",
        border: "2px solid purple",
        borderRadius: "15px",
        padding: "16px",
        textAlign: "center",
        width: "250px",
        margin: "12px",
        boxShadow: "0 0 25px rgba(128,0,128,0.7), 0 0 15px rgba(0,255,255,0.5)",
        fontFamily: "Georgia, serif",
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-10px) scale(1.05) rotateZ(1deg)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(128,0,128,0.9), 0 0 25px rgba(0,255,255,0.8)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1) rotateZ(0deg)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(128,0,128,0.7), 0 0 15px rgba(0,255,255,0.5)";
      }}
      >
        <h2 style={{ color: "magenta", textShadow: "0 0 8px cyan" }}>{buff.name}</h2>
        <p style={{ fontStyle: "italic", textShadow: "0 0 5px purple" }}>{buff.description}</p>
  
        {/* магические частицы */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: "6px",
            height: "6px",
            background: i % 2 === 0 ? "cyan" : "magenta",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: "none",
            opacity: 0.7,
            animation: `float${i} 3s infinite ease-in-out`
          }} />
        ))}
  
        <style>
          {`
            @keyframes float0 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
            @keyframes float1 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);} }
            @keyframes float2 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
            @keyframes float3 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
            @keyframes float4 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
            @keyframes float5 { 0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);} }
          `}
        </style>
      </div>
    );
  }
  
  export default BuffCard;
  