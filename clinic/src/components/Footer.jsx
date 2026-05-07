// sections/Footer.jsx

import {
  FaArrowUp,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  FiMapPin,
  FiMail,
} from "react-icons/fi";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white pt-28 pb-8 relative border-t border-gray-100">

      {/* Container */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8">

        {/* Top Footer */}
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-24">

          {/* Left */}
          <div>

            {/* Logo */}
            <h1 className="text-3xl font-extralight text-[#0b1c48]">

              Clinic

            </h1>

            {/* Description */}
            <p className="text-[#6c757d] text-md leading-8 mt-5 max-w-lg">

              Crafting exceptional digital experiences through thoughtful design and innovative solutions that elevate your brand presence.

            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 mt-8">

              {/* Address */}
              <div className="flex items-center gap-4">

                <FiMapPin className="text-[#175CDD] text-lg shrink-0" />

                <p className="text-[#5f6b85] text-md">

                  123 Creative Boulevard, Design District, NY 10012

                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-[#175CDD] text-sm shrink-0" />

                <p className="text-[#5f6b85] text-[1rem]">

                  +1 (555) 987-6543

                </p>

              </div>

              {/* Email */}
              <div className="flex items-center gap-4">

                <FiMail className="text-[#175CDD] text-lg shrink-0" />

                <p className="text-[#5f6b85] text-[1rem]">

                  hello@designstudio.com

                </p>

              </div>

            </div>

          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

            {/* Studio */}
            <div>

              <h1 className="text-[1.5rem] font-light text-[#0b1c48]">

                Studio

              </h1>

              <div className="flex flex-col gap-5 mt-8">

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Our Story

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Design Process

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Portfolio

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Case Studies

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Awards

                </button>

              </div>

            </div>

            {/* Services */}
            <div>

              <h1 className="text-[1.5rem] font-light text-[#0b1c48]">

                Services

              </h1>

              <div className="flex flex-col gap-5 mt-8">

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Brand Identity

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Web Design

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Mobile Apps

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Digital Strategy

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Consultation

                </button>

              </div>

            </div>

            {/* Resources */}
            <div>

              <h1 className="text-[1.5rem] font-light text-[#0b1c48]">

                Resources

              </h1>

              <div className="flex flex-col gap-5 mt-8">

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Design Blog

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Style Guide

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Free Assets

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Tutorials

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Inspiration

                </button>

              </div>

            </div>

            {/* Connect */}
            <div>

              <h1 className="text-[1.5rem] font-light text-[#0b1c48]">

                Connect

              </h1>

              <div className="flex flex-col gap-5 mt-8">

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Start Project

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Schedule Call

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Join Newsletter

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Follow Updates

                </button>

                <button className="text-left text-[#7b879d] text-[1rem] hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

                  Partnership

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex lg:flex-row flex-col justify-between items-center gap-10 mt-20 border-t border-gray-100 pt-8">

          {/* Copyright */}
          <p className="text-[#9aa3b5] text-sm">

            © <span className="text-[#0b1c48]">Clinic.</span> All rights reserved.

          </p>

          {/* Policies */}
          <div className="flex items-center gap-8">

            <button className="text-[#9aa3b5] text-sm hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

              Privacy Policy

            </button>

            <button className="text-[#9aa3b5] text-sm hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

              Terms of Service

            </button>

            <button className="text-[#9aa3b5] text-sm hover:text-[#175CDD] transition-all duration-300 cursor-pointer">

              Cookie Policy

            </button>

          </div>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#175CDD] text-white flex items-center justify-center text-lg shadow-lg hover:bg-[#0f4fc5] hover:-translate-y-1 transition-all duration-300 cursor-pointer z-50"
      >

        <FaArrowUp />

      </button>

    </footer>
  );
};

export default Footer;