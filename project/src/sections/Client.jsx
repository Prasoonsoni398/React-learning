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
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div>client</div>
    </>
  );
};

export default Client;
