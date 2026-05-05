import React, { useEffect } from "react";
import { client } from "../Components/export";
import { useDarkMode } from "../Components/DarkModeContext";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-linear-to-br from-black via-gray-900 to-gray-800"
            : "bg-linear-to-br from-red-100 via-white to-red-50"
        } pb-20 transition-all duration-500`}
      >
        <section
          id="testimonials"
          className="lg:w-[90%] w-full m-auto rounded-2xl flex flex-col items-start lg:px-16 px-6 py-20 gap-16"
        >
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2
              data-aos="fade-up"
              className="text-red-500 dark:text-red-400 text-sm font-semibold tracking-widest"
            >
              OUR CLIENTS
            </h2>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-black dark:text-white text-3xl md:text-4xl font-bold leading-tight"
            >
              What our clients <br /> saying about us
            </h1>
          </div>

          {/* Cards */}
          <div
            id="client-box"
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full"
          >
            {client.map((item, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                key={index}
                className="group bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col gap-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Stars */}
                <div className="flex text-yellow-400  gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-2">
                  <img
                    src={item.image}
                    alt="client"
                    className="w-15 h-15 rounded-full object-cover border-2 border-red-400 transform group-hover:scale-105 transition duration-300"
                  />

                  <div>
                    <h3 className="text-black dark:text-white font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p>{item.feedback}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Client;
