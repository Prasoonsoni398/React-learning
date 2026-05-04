import React, { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import bgImage1 from "../assets/bgImage1.png";
import bgImage2 from "../assets/bgImage2.png";
import bgImage3 from "../assets/bgImage3.png";

const images = [bgImage1, bgImage2, bgImage3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // ✅ FIX: useEffect inside component
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-154 overflow-hidden bg-black">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img} // ✅ removed wrong ?auto params
          alt="slide"
          className={`absolute w-full h-full  object-cover transition-all duration-700 ${
            index === current ? "opacity-70" : "opacity-0"
          }`}
        />
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray/40 backdrop-blur-md px-3 py-3 rounded-full"
      >
        <MdArrowBackIos className="text-white text-xl" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray/40 backdrop-blur-md px-3 py-3 rounded-full"
      >
        <MdArrowForwardIos className="text-white text-xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-(--color-primary) w-10" : "bg-gray-300 w-3"
            }`}
          />
        ))}
      </div>
      <div className="inset-0 flex flex-col top-1/3 gap-3 absolute items-center place-items-center text-white ">
        <h1 className="md:text-5xl text-3xl text-center font-bold">Your Favorite Food,<br />Delivered Fast</h1>
        <p className="text-xl text-(--color-">Order from thousands of restaurants and get it delivered to your doorstep</p>
      </div>
    </div>
  );
};

export default Home;
