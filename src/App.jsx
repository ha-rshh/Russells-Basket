import React from "react";
import Navbar from "./components/Navbar";
import CarouselBox from "./components/CarouselBox";

function App() {
  return (
    <>
      <div className="bg-hero-pattern">
        <Navbar />
        <CarouselBox />
      </div>
    </>
  );
}

export default App;
