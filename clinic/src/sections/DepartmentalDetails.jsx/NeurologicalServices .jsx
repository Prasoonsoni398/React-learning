// sections/NeurologicalServices.jsx

import { motion } from "framer-motion";

import {
  FiZap,
  FiSearch,
  FiHeart,
  FiUserPlus,
  FiMoon,
  FiShield,
} from "react-icons/fi";

const servicesData = [
  {
    icon: <FiZap />,
    title: "Epilepsy Treatment",
    description:
      "Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.",
  },

  {
    icon: <FiSearch />,
    title: "Diagnostic Imaging",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },

  {
    icon: <FiHeart />,
    title: "Stroke Prevention",
    description:
      "Donec sollicitudin molestie malesuada. Proin eget tortor risus cras ultricies ligula.",
  },

  {
    icon: <FiUserPlus />,
    title: "Movement Disorders",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
  },

  {
    icon: <FiMoon />,
    title: "Sleep Disorders",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },

  {
    icon: <FiShield />,
    title: "Memory Care",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a vestibulum ac diam.",
  },
];

const NeurologicalServices = () => {
  return (
    <section className="mt-20">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-3xl lg:text-5xl font-extralight text-[#0b1c48]">
          Our Neurological Services
        </h1>

        <p className="max-w-3xl mx-auto text-[#6c757d] text-sm lg:text-md leading-8 mt-4 lg:px-0 px-8">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>

      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 mt-16">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12">

          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group border-b border-[#e5e7eb] pb-10 hover:translate-x-3 transition-all duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center text-[#175CDD] text-2xl group-hover:bg-[#175CDD] group-hover:text-white transition-all duration-500">

                {service.icon}

              </div>

              {/* Title */}
              <h1 className="text-2xl font-medium text-[#0b1c48] mt-5 group-hover:text-[#175CDD] transition-all duration-300">

                {service.title}

              </h1>

              {/* Description */}
              <p className="text-[#6c757d] text-sm lg:text-md leading-8 mt-4">

                {service.description}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default NeurologicalServices;