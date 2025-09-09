import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";   
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import HelperButton from "./components/Helper";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="content" id="catalog">
        <CarList />
      </main>
      <Footer />
      <HelperButton />
    </div>
  );
}

export default App;
