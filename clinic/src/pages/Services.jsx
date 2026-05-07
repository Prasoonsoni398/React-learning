import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { RiHeartPulseFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { TbBone } from "react-icons/tb";
import { MdChildCare, MdEmergency } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

import cardioImg from "../assets/images/cardio.png";
import neuroImg from "../assets/images/neuro.png";
import orthoImg from "../assets/images/ortho.png";
import pediatricImg from "../assets/images/pediatric.png";
import emergencyImg from "../assets/images/service-emergency.png";
import labImg from "../assets/images/service-lab.png";

const servicesData = [
  {
    title: "Cardiology",
    image: cardioImg,
    icon: <RiHeartPulseFill />,
    description:
      "Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular conditions.",
    points: ["ECG Testing", "Heart Surgery"],
  },
  {
    title: "Neurology",
    image: neuroImg,
    icon: <GiBrain />,
    description:
      "Expert neurological care for brain and nervous system disorders with state-of-the-art imaging technology.",
    points: ["MRI Scans", "Stroke Care"],
  },
  {
    title: "Orthopedics",
    image: orthoImg,
    icon: <TbBone />,
    description:
      "Specialized bone and joint treatment including sports medicine and reconstructive surgery procedures.",
    points: ["Joint Replacement", "Sports Medicine"],
  },
  {
    title: "Pediatrics",
    image: pediatricImg,
    icon: <MdChildCare />,
    description:
      "Dedicated healthcare for children from infancy through adolescence with specialized treatment protocols.",
    points: ["Well-Child Visits", "Immunizations"],
  },
  {
    title: "Emergency Care",
    image: emergencyImg,
    icon: <MdEmergency />,
    description:
      "24/7 emergency medical services with rapid response teams and critical care capabilities.",
    points: ["Trauma Center", "Critical Care"],
  },
  {
    title: "Laboratory Testing",
    image: labImg,
    icon: <BiTestTube />,
    description:
      "Advanced diagnostic laboratory services with comprehensive testing panels and rapid result delivery.",
    points: ["Blood Tests", "Pathology"],
  },
];

const Services = () => {
  return (
    <section className="pt-24 pb-28 bg-white overflow-hidden">
      {/* Top Section */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto lg:px-4 px-8 text-center pt-16 pb-20">
          <h1 className="text-[2.2rem] sm:text-[2.7rem] font-light text-[#0b1c48]">
            Services
          </h1>

          <p className="text-[#6c757d] text-[0.96rem] leading-8 max-w-3xl mx-auto mt-5">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="bg-[#f5f5f5] py-6 border-y border-gray-100">
          <div className="max-w-7xl mx-auto lg:px-4 px-8 flex items-center gap-3 text-[1rem]">
            <span className="text-[#175CDD] cursor-pointer hover:underline">
              Home
            </span>

            <span className="text-[#9ca3af]">/</span>

            <span className="text-[#0b1c48]">Services</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto lg:px-8 px-8 mt-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10" >
          {servicesData.map((service, index) => {
            const row = Math.floor(index / 3);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0,
                  delay: row * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-white rounded-[1.7rem] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 relative pb-5"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[250px] ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#175CDD]/0 group-hover:bg-[#175CDD]/75 transition-all duration-500"></div>

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Title */}
                  <h1 className="text-2xl font-semibold text-[#0b1c48]">
                    {service.title}
                  </h1>

                  {/* Description */}
                  <p className="text-[#6c757d] text-sm font-semibold leading-7 mt-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 mb-13 mt-3">
                    {service.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[#0b1c48] text-sm"
                      >
                        <FaCheck className="text-[#175CDD] text-[0.7rem]" />
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="w-[85%] absolute bg-[#175CDD] hover:bg-[#0f4fc5] text-white py-3 rounded-xl flex items-center justify-between px-6 text-[1rem] font-medium transition-all duration-300 cursor-pointer my-5 bottom-1">
                    <span>Learn More</span>

                    <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
