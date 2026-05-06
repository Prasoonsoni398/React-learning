import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={darkMode ? "bg-black" : "light bg-transparent"}>
        <section
          className={`${
            darkMode ? "bg-gray-900 text-white" : "bg-red-100 text-black"
          } lg:w-[90%] w-full m-auto rounded-2xl flex flex-col items-center lg:px-20 px-6 py-20 gap-20 shadow-lg`}
        >
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-10">
            {/* Left */}
            <div>
              <h1 className="text-red-500 tracking-wide dark:text-red-600">POPULAR AREAS</h1>

              <h1 className="mt-4 text-[42px] font-bold leading-tight">
                Explore most <br /> popular areas
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Discover the best locations with amazing properties and
                lifestyle.
              </p>
            </div>

            {/* Right Images */}
            <div className="grid lg:grid-cols-3 col-span-2 gap-6 w-full">
              {[area1, area2, area3].map((img, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={400}
                  style={{ backgroundImage: `url(${img})` }}
                  className="h-75 w-full bg-cover bg-center rounded-xl relative overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-105 shadow-md hover:shadow-xl"
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Text on image */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                    <h2 className="text-xl font-semibold">Location {i + 1}</h2>
                    <p className="text-sm">Explore properties</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="bottom"
            className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6"
          >
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                data-aos="slide-up"
                data-aos-delay={200 + i * 100}
                className="
        flex items-center gap-6 w-full 
        bg-white dark:bg-gray-400 
        rounded-2xl p-6 
        shadow-md hover:shadow-xl 
        transition-all duration-500 
        hover:-translate-y-2
      "
              >
                {/* Number */}
                <h1 className="text-4xl md:text-6xl font-bold text-red-500 dark:text-red-700">
                  5K
                </h1>

                {/* Text */}
                <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-800 leading-tight">
                  ACTIVE <br /> LISTINGS
                </h1>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularAreas;
