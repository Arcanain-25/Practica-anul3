"use client";

export function LocalCarCard({ car }: { car: any }) {
  return (
    <div
      className={`car-card relative w-[220px] aspect-[2/3] rounded-xl overflow-hidden border-4 shadow-lg 
        transition-transform hover:scale-105 hover:shadow-2xl
        ${
          car.rarity === "Legendary"
            ? "border-yellow-400"
            : car.rarity === "Epic"
            ? "border-purple-500"
            : car.rarity === "Rare"
            ? "border-blue-400"
            : "border-gray-400"
        }
      `}
    >
      {/* Изображение */}
      <div className="w-full h-[60%] bg-black flex items-center justify-center">
        <img
          src={car.img}
          alt={car.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Информация */}
      <div className="p-2 text-sm flex flex-col gap-1 bg-black/60 text-white h-[40%]">
        <h3 className="text-lg font-bold text-center">{car.name}</h3>
        <p><b>Год:</b> {car.year}</p>
        <p><b>Мощность:</b> {car.power}</p>
        <p><b>Магия:</b> {car.magic}</p>
      </div>
    </div>
  );
}
