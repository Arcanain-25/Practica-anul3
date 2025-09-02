import cars from "../data/cars";
import CarCard from "../components/CarCard";

function CarsPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cars.map(car => <CarCard key={car.id} car={car} />)}
    </div>
  );
}

export default CarsPage;
