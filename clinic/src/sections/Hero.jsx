// sections/Hero.jsx

import {
  FaShieldAlt,
  FaClock,
  FaStar,
  FaPhoneAlt,
  FaPlayCircle,
} from "react-icons/fa";

import { FaRegCalendarCheck } from "react-icons/fa6";

import doctorimg from "../assets/images/doctorimg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f5f9ff] overflow-hidden relative pt-30">
      {/* Background Shapes */}
      <div className="absolute -top-24 -left-56 w-[48rem] h-[48rem] border border-[#dce7ff] rounded-full opacity-60 "></div>

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-96 left-[50%] w-28 h-28 bg-[#dce7ff] rounded-full opacity-60"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-30 right-[39%] w-52 h-52 bg-[#dce7ff] rounded-full opacity-60"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-25 right-[12%] w-52 h-52 bg-[#dce7ff] rounded-full opacity-60"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center place-items-center lg:place-items-start">
        {/* Left Section */}
        <div className="relative z-10 ">
          {/* Top Tags */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-[#e9f1ff] text-[#175CDD] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <FaShieldAlt className="text-xs" />
              Accredited
            </div>

            <div className="bg-[#e9f1ff] text-[#175CDD] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <FaClock className="text-xs" />
              24/7 Emergency
            </div>

            <div className="bg-[#e9f1ff] text-[#175CDD] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <FaStar className="text-xs" />
              4.9/5 Rating
            </div>
          </div>

          {/* Heading */}
          <h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl text-4xl font-bold text-[#0b1c48] leading-18 mt-8 ">
            Excellence in
            <br />
            <span className="text-[#175CDD] underline underline-offset-4">
              Healthcare
            </span>{" "}
            With
            <br />
            Compassionate Care
          </h1>

          {/* Paragraph */}
          <p className="text-[#6c757d] text-lg leading-9 mt-5 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-5">
            <div>
              <h1 className="text-[#175CDD] text-4xl font-bold">15+</h1>

              <p className="text-[#6c757d] text-sm font-semibold mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h1 className="text-[#175CDD] text-4xl font-bold">5000+</h1>

              <p className="text-[#6c757d] text-sm font-semibold mt-2">
                Patients Treated
              </p>
            </div>

            <div>
              <h1 className="text-[#175CDD] text-4xl font-bold">50+</h1>

              <p className="text-[#6c757d] text-sm font-semibold mt-2">
                Medical Experts
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-5">
            <button className="bg-[#175CDD] hover:bg-[#1f57eb] text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:-translate-y-2">
              Book Appointment
            </button>

            <button className="border-2 border-[#175CDD] text-[#175CDD] hover:bg-[#175CDD] hover:text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <FaPlayCircle className="text-lg" />
              Watch Our Story
            </button>
          </div>

          {/* Hotline Card */}
          <div className="bg-white border border-[#dce7ff] rounded-3xl px-4 py-3 flex items-center gap-5 mt-8 max-w-xl shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#175CDD] flex items-center justify-center text-white text-2xl">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-[#9aa4b2] text-sm w-full font-medium">
                Emergency Hotline
              </p>

              <h1 className="text-[#0b1c48] text-lg font-bold mt-1">
                +1 (555) 911-2468
              </h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end ps-10">
          {/* Image Wrapper */}
          <div className="relative w-full pt-15">
            {/* Main Image */}
            <img
              src={doctorimg}
              alt="doctor"
              className="w-full rounded-[2rem] object-cover shadow-2xl"
            />

            {/* Top Floating Card */}
            <div className="absolute top-18 right-5 bg-white rounded-3xl px-4 py-4 shadow-xl flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e9f1ff] flex items-center justify-center text-[#175CDD] text-2xl">
                <FaRegCalendarCheck />
              </div>

              <div>
                <h1 className="text-[#0b1c48] text-xl font-bold leading-none">
                  Next Available
                </h1>

                <p className="text-[#444] text-lg font-semibold mt-1">
                  Today 2:30 PM
                </p>

                <p className="text-[#9aa4b2] text-sm mt-1">Dr. Sarah Johnson</p>
              </div>
            </div>

            {/* Bottom Rating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-3xl px-6 py-5 shadow-xl">
              <div className="flex items-center gap-1 text-[#ffb400] text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h1 className="text-[#0b1c48] text-4xl font-bold mt-3">4.9/5</h1>

              <p className="text-[#9aa4b2] text-sm mt-3">1,234 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
