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
            ? "bg-gradient-to-br from-black via-gray-900 to-gray-800"
            : "bg-gradient-to-br from-red-100 via-white to-red-50"
        } py-20 transition-all duration-500`}
      >
        <section
          id="contact"
          className={`${
            darkMode ? "bg-gray-900" : "bg-red-100"
          } lg:w-[90%] w-full m-auto rounded-2xl grid lg:grid-cols-2 grid-cols-1 items-center lg:px-20 px-6 py-20 gap-12`}
        >
          {/* Form */}
          <form
            data-aos="fade-up"
            className="bg-white/80 dark:bg-black/60 backdrop-blur-lg p-10 flex flex-col gap-4 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Send us a message today
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-red-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-red-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-red-400 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message..."
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-red-400 outline-none"
            ></textarea>

            <button className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-black dark:hover:bg-red-700 transition-all duration-300">
              SEND MESSAGE
            </button>
          </form>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:p-10">
            <h3
              data-aos="zoom-in"
              className="text-red-500 dark:text-red-400 font-semibold tracking-widest"
            >
              REACH US
            </h3>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-black dark:text-white text-3xl font-bold leading-snug"
            >
              We’re here to help you find your dream property.
            </h1>

            <p
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-300"
            >
              Contact us anytime and our team will get back to you quickly with
              the best solutions tailored for you.
            </p>

            <button data-aos="zoom-in"
              className="bg-red-600 text-white px-6 py-3 w-fit rounded-lg font-semibold hover:bg-black dark:hover:bg-red-700 transition-all duration-300">
              CONTACT NOW
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;