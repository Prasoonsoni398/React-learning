// sections/History.jsx

import historyImg from "../../assets/images/history.png";
import { motion } from "framer-motion";

import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

import { FiShield } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";

const featuresData = [
  {
    icon: <FiShield />,
    title: "Advanced Technology",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    icon: <LuClock3 />,
    title: "24/7 Availability",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
  },

  {
    icon: <HiOutlineUserGroup />,
    title: "Expert Team",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
];

const History = () => {
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-blue-500 text-white p-10 rounded-2xl"
  >
    Framer Motion Animation
  </motion.div>;
  return (
    <section className="w-full bg-[#f7f9fc] py-24 overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-thin text-[#0b1c48] leading-tight">
              Excellence in Medical Care, Every Day
            </h1>

            <p className="text-[#6c757d] text-lg leading-7 mt-10 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col  items-start gap-4 mt-8">
              <button className="text-[#175CDD] text-md border-b border-[#175CDD] pb-1 flex items-center gap-4 hover:gap-6 transition-all duration-300 cursor-pointer">
                Schedule Consultation
                <FaArrowRight className="text-sm" />
              </button>

              <button className="text-[#6c757d] text-md flex items-center gap-4 hover:gap-6 transition-all duration-300 cursor-pointer">
                Explore Services
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={historyImg}
              alt="History"
              className="w-full h-[300px] sm:h-[500px] lg:h-[520px] object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 pt-24 mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="text-[#175CDD] text-4xl">{item.icon}</div>

              {/* Title */}
              <h1 className="text-3xl font-light text-[#0b1c48] mt-8">
                {item.title}
              </h1>

              {/* Description */}
              <p className="text-[#6c757d] text-md leading-10 mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emergency Box */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto lg:px-4 px-8 mt-20"
      >
        <div className="bg-[#eef4ff] rounded-sm px-10 lg:px-12 py-8 grid lg:grid-cols-[1fr_auto] items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl font-extralight text-[#0b1c48] leading-tight">
              Need Immediate Medical Assistance?
            </h1>

            <p className="text-[#6c757d] text-md leading-8 mt-4 max-w-3xl">
              Our emergency response team is available around the clock to
              provide immediate medical support when you need it most.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-end">
            {/* Call Button */}
            <button className="bg-[#175CDD] hover:bg-[#0f4fc5] text-white px-9 py-4 rounded-lg flex items-center gap-4 text-[1.1rem] font-semibold cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
              <FaPhoneAlt className="text-sm" />
              (555) 123-4567
            </button>

            {/* Location */}
            <button className="text-[#8f96a8] text-lg mt-3 hover:text-[#175CDD] transition-all duration-300 cursor-pointer">
              Find Location
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default History;
