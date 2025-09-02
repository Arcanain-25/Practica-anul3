import buffs from "../data/buffs";
import BuffCard from "../components/BuffCard";

function BuffsPage() {
  // Разделим баффы на 4 столбика
  const columns = 4;
  const columnBuffs = Array.from({ length: columns }, () => []);

  buffs.forEach((buff, index) => {
    columnBuffs[index % columns].push(buff);
  });

  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a001a, #1a002e, #000000)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      padding: "40px 20px",
      boxSizing: "border-box"
    }}>
      {columnBuffs.map((col, colIndex) => (
        <div key={colIndex} style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center"
        }}>
          {col.map(buff => (
            <BuffCard key={buff.id} buff={buff} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BuffsPage;
