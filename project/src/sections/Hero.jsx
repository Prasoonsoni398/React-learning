import React, { useEffect } from "react";
import { DarkModeProvider, useDarkMode } from "../Components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const hero = () => {
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
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-150 m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gpa-7 z-99"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="md:text-6xl text-4xl text-white font-semibold lg:pr-150 pr-0 md:leading-17.5 leading-10 mb-5"
          >
            Find your next Home in Los Angeles
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white sm:text-xl text-md lg:pr-125 pr-0 "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos
            officiis magni error corporis odit magnam repellendus. Facilis, id
            aut.
          </p>
        </section>
      </div>

      {/* form starts from here */}
      <div
        className={`${darkMode ? "dark bg-black" : "light bg-transparent"}' z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${darkMode ? "dark bg-gray-800" : "light bg-transparent"}' lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 place-items-center items-center gap-6 p-8 rounded-xl `}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b border-[#c9c7c1] outline-none focus:border-amber-400"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b w-full border-[#c9c7c1] outline-none text-gray-500 text-md mt-2"
            >
              <option value="" disabled >
                Select Property
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Comercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b w-full border-[#c9c7c1] outline-none  text-gray-500 text-md mt-2"
            >
              <option value="" disabled >
                Property Category{" "}
              </option>
              <option value="Option1">Apartment</option>
              <option value="Option2" className="active:bg-amber-200">
                Duplex
              </option>
              <option value="Option3">Condos</option>
              <option value="Option4">Condos</option>
              <option value="Option5">Condos</option>
            </select>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-300 dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-500 flex-1"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
