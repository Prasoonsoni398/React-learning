import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { property } from "../Components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaUserCircle,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
    <div className={darkMode ? "bg-black" : "bg-transparent"}>
      <section className="w-full lg:w-[90%] m-auto lg:px-20 px-6 py-20 flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 data-aos="zoom-in" className="text-red-500 font-bold">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="lg:text-5xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {property.map((item, index) => (
            <div
              key={index}
              data-aos="slide-up"
              className="group bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-62.5 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.images})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Top Tags */}
                <div className="absolute top-4 left-4 flex gap-2 items-center">
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm hover:bg-white hover:text-black">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm hover:bg-white hover:text-black">
                    Sale
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{item.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <FaVideo />
                    <FaCamera />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <h1 className="text-xl font-semibold dark:text-white">
                  {item.name}
                </h1>

                <h1 className="text-2xl font-bold text-green-600">
                  {item.price}
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.about}
                </p>

                {/* Icons */}
                <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <FaBath className="text-red-400" />
                    {item.bath}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBed className="text-red-400" />
                    {item.bed}
                  </div>
                  <div className="flex items-center gap-1">
                    <MdSpaceDashboard className="text-red-400" />
                    {item.area}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-3"></div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm dark:text-white">
                    <FaUserCircle className="text-red-400" />
                    {item.owner}
                  </div>

                  <div className="flex gap-3">
                    <button className="p-2 border rounded-lg hover:bg-black hover:text-white transition hover:scale-110">
                      <FaShareAlt className="text-red-400" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-black hover:text-white transition hover:scale-110">
                      <FaHeart className="text-red-400" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-black hover:text-white transition hover:scale-110">
                      <FaPlus className="text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
