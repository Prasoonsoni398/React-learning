// components/TopHeader.jsx

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#175CDD] text-white h-10  block fixed top-0 z-10">

      <div className="max-w-7xl mx-auto h-full flex sm:justify-between justify-center items-center">

        {/* Left */}
        <div className="flex items-center  xl:gap-8 gap-6 text-[14px]">

          <div className="flex items-center gap-2 cursor-pointer">
            <FaEnvelope className="text-[12px]" />
            <p>contact@example.com</p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <FaPhoneAlt className="text-[11px]" />
            <p>+1 5589 55488 55</p>
          </div>

        </div>

        {/* Right */}
        <div className="sm:flex items-center gap-4 text-[14px] hidden ">

          <FaXTwitter className="hover:text-white cursor-pointer transition-all duration-300" />

          <FaFacebook className="hover:text-white cursor-pointer transition-all duration-300" />

          <FaInstagram className="hover:text-white cursor-pointer transition-all duration-300" />

          <FaLinkedin className="hover:text-white cursor-pointer transition-all duration-300" />

        </div>

      </div>

    </div>
  );
};

export default TopHeader;