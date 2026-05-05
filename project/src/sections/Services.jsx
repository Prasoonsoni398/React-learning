import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { service } from "../Components/export";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } pb-20 transition-colors duration-500 `}
      >
        <section
          id="services"
          className={`${
            darkMode ? "bg-gray-900" : "bg-red-50"
          } lg:w-[90%] w-full m-auto rounded-2xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-14 transition-all duration-500`}
        >
          <div className="flex flex-col gap-4">
            <h2
              data-aos="fade-up"
              className="text-red-500 dark:text-red-400 tracking-widest text-sm font-semibold"
            >
              OUR SERVICES
            </h2>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-black dark:text-white text-3xl md:text-4xl font-bold leading-tight"
            >
              Top <span className="text-red-500">real</span> estate <br /> <span className="text-red-500">services</span>  available
            </h1>
          </div>

          <div
            id="service-box"
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full"
          >
            {service.map((item, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                key={index}
                className="group bg-white dark:bg-gray-800 px-8 py-10 min-h-75 flex flex-col justify-start items-start rounded-2xl border border-transparent hover:border-red-500 shadow-sm hover:shadow-xl cursor-pointer gap-5 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-5 rounded-full bg-red-100 dark:bg-gray-700 group-hover:bg-red-500 transition-all duration-300">
                  <item.icon className="text-red-600 dark:text-white size-8 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>

                <h2 className="text-black dark:text-white text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-auto text-red-600 dark:text-red-400 font-semibold border-b-2 border-red-600 dark:border-red-400 hover:tracking-wider transition-all duration-300">
                  READ MORE →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
