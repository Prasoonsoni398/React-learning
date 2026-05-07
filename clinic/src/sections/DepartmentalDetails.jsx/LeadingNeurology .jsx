// sections/LeadingNeurology.jsx

import { motion } from "framer-motion";

import { FiCheck, FiPhone, FiCalendar } from "react-icons/fi";

import neuroImg from "../../assets/images/neuro-expertise.png";

const points = [
  "Board-certified neurologists and neurosurgeons",
  "State-of-the-art diagnostic equipment and facilities",
  "Comprehensive care from diagnosis to rehabilitation",
  "Personalized treatment plans for every patient",
];

const LeadingNeurology = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto lg:px-4 px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <img
                src={neuroImg}
                alt="Neurology"
                className="w-full h-[320px] lg:h-[400px] mt-7 object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl font-extralight text-[#0b1c48] leading-tight">
              Leading Neurological Expertise
            </h1>

            {/* Description */}
            <p className="text-[#6c757d] text-sm lg:text-md leading-8 mt-5 max-w-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Sed porttitor lectus nibh donec rutrum congue leo eget
              malesuada.
            </p>

            {/* Points */}
            <div className="space-y-7 mt-10">
              {points.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FiCheck className="text-[#175CDD] text-lg mt-1 shrink-0" />

                  <p className="text-[#4b5563] text-sm lg:text-md">{item}</p>
                </div>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              {/* Emergency */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center text-[#175CDD] text-xl shrink-0">
                  <FiPhone />
                </div>

                <div>
                  <p className="text-[#9ca3af] text-sm">Emergency Neurology</p>

                  <h2 className="text-[#0b1c48] text-md font-semibold mt-1">
                    +1 (555) 234-5678
                  </h2>
                </div>
              </div>

              {/* Appointment */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center text-[#175CDD] text-xl shrink-0">
                  <FiCalendar />
                </div>

                <div>
                  <p className="text-[#9ca3af] text-sm">Appointments</p>

                  <h2 className="text-[#0b1c48] text-md font-semibold mt-1">
                    Mon - Fri, 8:00 AM - 6:00 PM
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadingNeurology;
