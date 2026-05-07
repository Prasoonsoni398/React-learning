// sections/DepartmentsCard.jsx

import { FaArrowRight } from "react-icons/fa";
import { PiHeartbeatThin } from "react-icons/pi";
import { RiBrainLine } from "react-icons/ri";
import { GiBoneKnife } from "react-icons/gi";
import { MdChildCare, MdOutlineMedicalServices } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";

import cardioImg from "../../assets/images/cardio.png";
import neuroImg from "../../assets/images/neuro.png";
import orthoImg from "../../assets/images/ortho.png";
import pediatricImg from "../../assets/images/pediatric.png";
import dermaImg from "../../assets/images/derma.png";
import oncologyImg from "../../assets/images/oncology.png";

const departmentsData = [
  {
    title: "Cardiology",
    description:
      "Comprehensive heart care with advanced diagnostic tools and expert cardiologists dedicated to your cardiovascular health.",
    image: cardioImg,
    icon: <PiHeartbeatThin />,
  },

  {
    title: "Neurology",
    description:
      "Advanced treatment for neurological disorders with cutting-edge technology and specialized neurological care teams.",
    image: neuroImg,
    icon: <RiBrainLine />,
  },

  {
    title: "Orthopedics",
    description:
      "Expert bone and joint care offering comprehensive treatment from sports injuries to complex reconstructive surgery.",
    image: orthoImg,
    icon: <GiBoneKnife />,
  },

  {
    title: "Pediatrics",
    description:
      "Specialized medical care for infants, children, and adolescents with compassionate pediatric specialists.",
    image: pediatricImg,
    icon: <MdChildCare />,
  },

  {
    title: "Dermatology",
    description:
      "Complete skin care services from medical dermatology to cosmetic procedures for healthy, beautiful skin.",
    image: dermaImg,
    icon: <MdOutlineMedicalServices />,
  },

  {
    title: "Oncology",
    description:
      "Comprehensive cancer care with multidisciplinary approach and latest treatment options for all cancer types.",
    image: oncologyImg,
    icon: <TbRibbonHealth />,
  },
];

const DepartmentsCard = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className=" max-w-7xl lg:px-4 px-8   mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 ">
          {departmentsData.map((item, index) => (
            <div key={index} className="group hover:shadow-xl hover:-translate-y-1.5 rounded-xl">
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-xl group" >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-60 object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-14 h-14 group-hover:bg-[#175CDD] transition-all duration-500 group-hover:text-white rounded-2xl bg-[#dbe8ff]/80 backdrop-blur-sm flex items-center justify-center text-[#175CDD] text-3xl font-extrabold">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 p-5">
                <h1 className="text-2xl font-extralight text-[#0b1c48]">
                  {item.title}
                </h1>

                <p className="text-[#6c757d] text-md leading-7 mt-4">
                  {item.description}
                </p>

                {/* Button */}
                <button className="flex items-center gap-3 text-[#0b1c48] group-hover:text-[#175CDD] text-[1rem] font-semibold mt-6 group cursor-pointer">
                  Learn More
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsCard;
