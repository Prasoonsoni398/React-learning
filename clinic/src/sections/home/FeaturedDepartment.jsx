// sections/Departments.jsx

import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

import { PiHeartbeatThin } from "react-icons/pi";

import { CiMicrochip } from "react-icons/ci";

import {  FaPhoneAlt } from "react-icons/fa";
import { BsShieldPlus } from "react-icons/bs";
import { FiUsers  } from "react-icons/fi";
import { TbActivityHeartbeat } from "react-icons/tb";

import cardioImg from "../../assets/images/cardio.png";
import neuroImg from "../../assets/images/neuro.png";

const departmentsData = [
  {
    badge: "SPECIALIZED CARE",
    title: "Cardiovascular Medicine",
    description:
      "Advanced diagnostic imaging and interventional procedures for comprehensive heart health management with personalized treatment protocols.",

    features: ["24/7 Emergency Cardiac Care", "Minimally Invasive Procedures"],

    button: "Explore Cardiology",

    image: cardioImg,

    icon: <PiHeartbeatThin />,
  },

  {
    badge: "EXPERT CARE",
    title: "Neurological Sciences",
    description:
      "Cutting-edge neuroimaging and neurosurgical expertise for complex brain and spinal cord conditions with innovative treatment approaches.",

    features: ["Advanced Brain Imaging", "Robotic Surgery"],

    button: "Explore Neurology",

    image: neuroImg,

    icon: <CiMicrochip />,
  },
];

// Add this data below departmentsData

const servicesData = [
  {
    title: "Orthopedic Surgery",
    description:
      "Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement procedures.",

    services: ["Sports Medicine", "Joint Replacement", "Spine Surgery"],

    icon: <BsShieldPlus  />,
  },

  {
    title: "Pediatric Care",
    description:
      "Child-centered healthcare services from newborn to adolescence with family-focused treatment approaches.",

    services: [
      "Neonatal Intensive Care",
      "Developmental Pediatrics",
      "Pediatric Surgery",
    ],

    icon: <FiUsers  />,
  },

  {
    title: "Cancer Treatment",
    description:
      "Multidisciplinary oncology program offering personalized cancer care with latest therapeutic innovations.",

    services: ["Precision Medicine", "Immunotherapy", "Radiation Oncology"],

    icon: <TbActivityHeartbeat />,
  },
];

const FeaturedDepartment = () => {
  return (
    <section className="w-full py-5 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#0b1c48]">
            Featured Departments
          </h1>

          {/* Line */}
          <div className="w-40 h-px bg-gray-300 mx-auto mt-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-px w-14 h-1 bg-[#175CDD] rounded-full"></div>
          </div>

          {/* Paragraph */}
          <p className="text-[#6c757d] text-lg mt-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mt-8 ">
          {departmentsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-lg"
            >
              {/* Content */}
              <div className="py-7 px-10">
                {/* Badge */}
                <div className="inline-flex items-center bg-[#dfedf5] text-[#175CDD] px-5 py-2 rounded-full text-sm font-semibold">
                  {item.badge}
                </div>

                {/* Title */}
                <h1 className="text-4xl font-extralight text-[#49536d] mt-7 leading-tight">
                  {item.title}
                </h1>

                {/* Description */}
                <p className="text-[#6c757d] text-sm leading-10 mt-4">
                  {item.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-5 mt-7">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <FaCheckCircle className="text-[#175CDD] text-md" />

                      <p className="text-[#6c757d] text-md">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="flex items-center gap-3 text-[#175CDD] text-lg font-medium mt-7 group cursor-pointer">
                  {item.button}

                  <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-15 h-15 rounded-full bg-white shadow-lg flex items-center justify-center text-[#175CDD] text-3xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Services Cards */}
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto gap-10 mt-15 lg:px-4 px-8">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-[2rem] relative px-10 py-14 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#175CDD] text-white flex items-center justify-center text-4xl mx-auto">
              {item.icon}
            </div>

            {/* Title */}
            <h1 className="text-2xl font-light text-[#414c66] mt-5">
              {item.title}
            </h1>

            {/* Description */}
            <p className="text-[#6c757d] text-md leading-9 mt-3">
              {item.description}
            </p>

            {/* Services */}
            <div className="flex flex-col gap-6 mt-5 mb-6">
              {item.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex items-center justify-center gap-3"
                >
                  <FaArrowRight className="text-[#175CDD] text-sm" />

                  <p className="text-[#6c757d] text-md">{service}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="text-[#175CDD] left-[35%] bottom-[5%] text-md font-semibold absolute cursor-pointer">
              LEARN MORE
            </button>
          </div>
        ))}
      </div>

      {/* Emergency Banner */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 sm:px-6 lg:px-8">

  <div className="mt-10 bg-gradient-to-r from-[#175CDD] to-[#3267E3] rounded-[2rem] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 flex lg:flex-row flex-col justify-between items-center gap-8">

    {/* Left Content */}
    <div className="text-center lg:text-left">

      <h1 className="text-white text-xl sm:text-2xl  font-light leading-tight">

        Emergency Services Available 24/7

      </h1>

      <p className="text-white/90 text-sm sm:text-base lg:text-md leading-7 sm:leading-8 mt-4 max-w-4xl">

        Our emergency department is equipped with state-of-the-art
        technology and staffed by board-certified emergency physicians
        ready to provide immediate care.

      </p>

    </div>

    {/* Button */}
    <button className="bg-white text-[#175CDD] px-5 sm:px-7 py-4 sm:py-5 rounded-full flex items-center justify-center gap-3 sm:gap-4 font-semibold whitespace-nowrap hover:scale-105 transition-all duration-500 cursor-pointer w-full sm:w-auto">

      <FaPhoneAlt className="text-lg sm:text-xl shrink-0" />

      <span className="text-sm sm:text-base lg:text-lg">

        Call Emergency: (555) 123-4567

      </span>

    </button>

  </div>

</div>
    </section>
  );
};

export default FeaturedDepartment;
