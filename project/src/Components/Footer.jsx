import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${darkMode ? "dark:bg-black" : "light bg-gray-800"} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            perferendis alias dolores impedit et facilis at dolor quisquam
            officia excepturi.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-full bg-white hover:bg-blue-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-500">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-pink-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-500">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-blue-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-500">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-500">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-5">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <a href="tel:8827580454" className="text-slate-200 ">
              +91 8827580454
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <a href="fax:8827580454" className="text-slate-200 ">
              +91 8827580454
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <a
              href="mailto:soniprasoon396@gmail.com"
              className="text-slate-200  no-underline "
            >
              soniprasoon396@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="footer-img"
              className="w-30 rounded-lg transform hover:scale-110 cursor-pointer transition-transforrm duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">$ 287.98</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="footer-img"
              className="w-30 rounded-lg transform hover:scale-110 cursor-pointer transition-transforrm duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Smart view from beach</h1>
              <p className="text-slate-400">$ 487.18</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Slide to top */}
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black
      cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" offset={-100} smooth={true}>
          <FaArrowUp className="size-5 text-white" />
        </Link>
      </div>

      {/* Dark mode toggle button */}
      <div>
        <button onClick={toggleDarkMode} className="flex items-center bg-red-300 p-4 rounded-full fixed lg:top-52 right-6 top-6 cursor-pointer ">
          {darkMode? <FaMoon size={25} className="text-black "/> :<FaSun size={25} className="text-black" />}
        </button>
        
      </div>
    </>
  );
};

export default Footer;
