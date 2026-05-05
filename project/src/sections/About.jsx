import React, { useEffect } from "react";
import aboutimg from "../assets/images/aboutimg.jpg";
import { DarkModeProvider, useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return(
  <>
    <div>
      <section
        id="about"
        className={`${darkMode ? "dark bg-black" : "light bg-transparent"} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 place-items-center items-center gap-10`}
      >
        <div>
            <img data-aos="zoom-in" src={aboutimg} alt="about image" className="rounded-2xl lg:w-125"/>
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">WHO WE ARE</h1>
            <h1 data-aos="zoom-in" data-aos-delay="200" className="md:text-[40px] text-3xl font-semibold leading-12 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p data-aos="zoom-in" data-aos-delay="400" className="text-xl text-gray-600 dark:text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus hic itaque, facilis nisi suscipit assumenda tempore obcaecati dolor magnam ab provident consequatur</p>
            <button type="submit" className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-red-300 dark:hover:text-black text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300 flex-1">READ MORE</button>
        </div>
      </section>
    </div>
  </>
  )
};

export default About;
