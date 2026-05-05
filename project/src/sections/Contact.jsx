import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
          darkMode
            ? "bg-linear-to-br from-black via-gray-900 to-gray-800"
            : "bg-linear-to-br from-red-100 via-white to-red-50"
        } py-20 transition-all duration-500`}
      >
        <section
          id="contact"
          className={`${darkMode ? "dark bg-gray-800" : "light bg-red-100"} lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 gap-10`}
        >
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
          >
            <h1 className="text-2xl text-black font-semibold dark:text-white">
              Send us a message today
            </h1>
            <input
              type="text"
              placeholder="Enter your full name "
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-red-400 outline-none"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-red-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-red-400 outline-none"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message here...."
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-red-400 outline-none"
            ></textarea>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
