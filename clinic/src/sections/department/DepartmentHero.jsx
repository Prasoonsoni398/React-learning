// sections/DepartmentHero.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBrain,
  FaHeartbeat,
  FaTooth,
} from "react-icons/fa";

import {
  GiMedicalPack,
} from "react-icons/gi";

import {
  MdMonitorHeart,
} from "react-icons/md";

import {
  BsActivity,
  BsFileMedicalFill,
} from "react-icons/bs";

import {
  FaStethoscope,
} from "react-icons/fa6";

import neuroImg from "../../assets/images/neuro.png";
import cardioImg from "../../assets/images/cardio.png";
import dentalImg from "../../assets/images/dental.png";
import surgeryImg from "../../assets/images/surgery.png";
import eyeImg from "../../assets/images/eye.png";

const departmentsData = [
  {
    tab: "Neurology",

    title: "Neurological Sciences Department",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",

    image: neuroImg,

    features: [
      {
        icon: <FaBrain />,
        title: "Brain Monitoring",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      },

      {
        icon: <BsActivity />,
        title: "EEG Testing",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      },

      {
        icon: <FaStethoscope />,
        title: "Neurological Exam",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      },

      {
        icon: <BsFileMedicalFill />,
        title: "Treatment Plans",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
      },
    ],
  },

  {
    tab: "Surgery",

    title: "Advanced Surgical Department",

    description:
      "Comprehensive surgical procedures with modern operation theaters and highly experienced surgeons for better patient recovery.",

    image: surgeryImg,

    features: [
      {
        icon: <GiMedicalPack />,
        title: "General Surgery",
        text: "Advanced minimally invasive procedures for faster recovery.",
      },

      {
        icon: <MdMonitorHeart />,
        title: "Heart Surgery",
        text: "Specialized cardiovascular operations with expert monitoring.",
      },

      {
        icon: <FaStethoscope />,
        title: "Consultation",
        text: "Detailed surgical evaluations and treatment planning.",
      },

      {
        icon: <BsFileMedicalFill />,
        title: "Post Care",
        text: "Comprehensive post-operative patient care and guidance.",
      },
    ],
  },

  {
    tab: "Dental Care",

    title: "Modern Dental Care Department",

    description:
      "Professional dental services with painless treatment methods and advanced dental technologies.",

    image: dentalImg,

    features: [
      {
        icon: <FaTooth />,
        title: "Teeth Whitening",
        text: "Bright smile enhancement with safe whitening procedures.",
      },

      {
        icon: <FaStethoscope />,
        title: "Dental Checkup",
        text: "Routine oral health examinations and diagnostics.",
      },

      {
        icon: <BsActivity />,
        title: "Root Canal",
        text: "Advanced root canal procedures with precision care.",
      },

      {
        icon: <BsFileMedicalFill />,
        title: "Dental Plans",
        text: "Affordable and personalized dental treatment plans.",
      },
    ],
  },

  {
    tab: "Ophthalmology",

    title: "Eye Care & Vision Department",

    description:
      "Complete vision care services with modern diagnostic systems and specialized eye treatments.",

    image: eyeImg,

    features: [
      {
        icon: <FaHeartbeat />,
        title: "Vision Testing",
        text: "Advanced eye examination for accurate vision correction.",
      },

      {
        icon: <MdMonitorHeart />,
        title: "Eye Monitoring",
        text: "Continuous eye health analysis with digital systems.",
      },

      {
        icon: <FaStethoscope />,
        title: "Eye Consultation",
        text: "Professional guidance from expert ophthalmologists.",
      },

      {
        icon: <BsFileMedicalFill />,
        title: "Laser Treatment",
        text: "Modern laser procedures for eye correction and treatment.",
      },
    ],
  },

  {
    tab: "Cardiology",

    title: "Cardiology & Heart Care Department",

    description:
      "State-of-the-art cardiac care with advanced diagnostic and interventional procedures for heart health.",

    image: cardioImg,

    features: [
      {
        icon: <FaHeartbeat />,
        title: "Heart Monitoring",
        text: "24/7 monitoring with advanced cardiac equipment.",
      },

      {
        icon: <MdMonitorHeart />,
        title: "ECG Testing",
        text: "Precise ECG diagnostics for cardiovascular assessment.",
      },

      {
        icon: <FaStethoscope />,
        title: "Heart Consultation",
        text: "Comprehensive consultation with heart specialists.",
      },

      {
        icon: <BsFileMedicalFill />,
        title: "Care Programs",
        text: "Customized cardiac rehabilitation and wellness plans.",
      },
    ],
  },
];

const DepartmentHero = () => {

  const [activeTab, setActiveTab] = useState(0);

 return (
 <section className="w-full bg-white pt-10 pb-20 mt-40 overflow-hidden">

  {/* Top Hero */}
  <div className="text-center">

    {/* Title */}
    <h1 className="text-4xl font-medium text-[#0b1c48]">

      Departments

    </h1>

    {/* Description */}
    <p className="text-[#49536d] text-md leading-7 max-w-4xl mx-auto mt-4 px-4">

      Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.

    </p>

  </div>

  {/* Breadcrumb */}
  <div className="w-full bg-[#f5f5f5] mt-16 py-7">

    <div className="max-w-7xl lg:px-4 mx-auto px-8 flex items-center gap-4 text-lg">

      <button className="text-[#175CDD] cursor-pointer">

        Home

      </button>

      <span className="text-[#6c757d]">/</span>

      <span className="text-[#0b1c48]">

        Departments

      </span>

    </div>

  </div>

  {/* Main Container */}
  <div className="max-w-7xl mx-auto mt-28 lg:px-4 px-8">

    {/* Tabs */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#f5f5f5] rounded-sm ">

      {
        departmentsData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative h-24 text-[1.15rem] font-semibold transition-all duration-300 cursor-pointer
              
              ${
                activeTab === index
                  ? "bg-[#175CDD] text-white"
                  : "bg-transparent text-[#0b1c48] hover:bg-[#2E6CE0] hover:text-white"
              }
            `}
          >

            {item.tab}

            {/* Bottom Triangle */}
            {
              activeTab === index && (
                <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#175CDD]"></div>
              )
            }

          </button>
        ))
      }

    </div>

    {/* Content Box */}
 <div className="bg-white rounded-[1.8rem] shadow-[0_12px_45px_rgba(0,0,0,0.06)] px-7 sm:px-10 lg:px-14 py-10 lg:py-14 mt-20">

  <AnimatePresence mode="wait">

    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center"
    >

      {/* Left */}
      <div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0b1c48] leading-tight">
          {departmentsData[activeTab].title}
        </h1>

        <p className="text-[#6c757d] text-[1.05rem] leading-9 mt-7 max-w-4xl">
          {departmentsData[activeTab].description}
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14 mt-16">

          {
            departmentsData[activeTab].features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-5"
              >

                <div className="w-16 h-16 rounded-full bg-[#175CDD] text-white flex items-center justify-center text-2xl shrink-0">
                  {feature.icon}
                </div>

                <div>

                  <h1 className="text-[1.45rem] font-semibold uppercase text-[#0b1c48] leading-tight">
                    {feature.title}
                  </h1>

                  <p className="text-[#6c757d] text-[1rem] leading-8 mt-3">
                    {feature.text}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </div>

      {/* Right */}
      <div className="flex justify-center lg:justify-end">

        <div className="overflow-hidden rounded-xl">

          <img
            src={departmentsData[activeTab].image}
            alt={departmentsData[activeTab].title}
            className="w-full max-w-[420px] h-[350px] sm:h-[470px] object-cover hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>

    </motion.div>

  </AnimatePresence>

</div>
  </div>

</section>
);
};

export default DepartmentHero;