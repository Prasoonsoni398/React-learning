// pages/DepartmentDetails.jsx

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

const DepartmentDetails = () => {
  return (
    <div className="py-35">

      {/* Top Hero Section */}
      <div className="text-center">

        <h1 className="text-3xl lg:text-3xl font-light text-[#0b1c48]">
          Department Details
        </h1>

        <p className="max-w-4xl mx-auto text-[#6c757d] text-md leading-7 mt-5 lg:px-0 px-8">
          Odio et unde deleniti. Deserunt numquam exercitationem.
          Officiis quo odio sint voluptas consequatur ut a odio
          voluptatem. Sit dolorum debitis veritatis natus dolores.
          Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>

      </div>

      {/* Breadcrumb */}
      <div className="bg-[#f3f5f7] mt-16">

        <div className="max-w-7xl mx-auto lg:px-4 px-8 py-6 flex items-center gap-4 text-[1rem]">

          <span className="text-[#175CDD] cursor-pointer hover:underline">
            Home
          </span>

          <span className="text-[#9ca3af]">/</span>

          <span className="text-[#0b1c48]">
            Department Details
          </span>

        </div>

      </div>

      {/* Department Details Hero */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 mt-20">

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center bg-[#eef4ff] text-[#175CDD] text-[0.9rem] font-semibold px-5 py-2 rounded-full uppercase tracking-wide">
              Neurology
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-extralight text-[#0b1c48] leading-[1.1] mt-8">
              Advanced Neurological Care
            </h1>

            {/* Description */}
            <p className="text-[#6c757d] text-[1.08rem] leading-8 mt-8 max-w-3xl">
              Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae. Donec velit neque,
              auctor sit amet aliquam vel, ullamcorper sit amet
              ligula.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center gap-10 mt-12">

              <div>
                <h1 className="text-[#175CDD] text-3xl font-light leading-none">
                  24/7
                </h1>

                <p className="text-[#8b95a7] text-sm uppercase mt-3 leading-6">
                  Emergency Neurology
                </p>
              </div>

              <div>
                <h1 className="text-[#175CDD] text-3xl font-light leading-none">
                  15+
                </h1>

                <p className="text-[#8b95a7] text-sm uppercase mt-3 leading-6">
                  Specialist Neurologists
                </p>
              </div>

              <div>
                <h1 className="text-[#175CDD] text-3xl font-light leading-none">
                  95%
                </h1>

                <p className="text-[#8b95a7] text-sm uppercase mt-3 leading-6">
                  Patient Satisfaction
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8 mt-14">

              <button className="bg-[#175CDD] hover:bg-[#0f4fc5] text-white px-10 h-[62px] rounded-sm text-[1rem] font-medium transition-all duration-300 cursor-pointer">
                Schedule Consultation
              </button>

              <button className="flex items-center gap-4 text-[#0b1c48] text-[1rem] font-medium cursor-pointer group">

                <span>View All Services</span>

                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

              </button>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Main Image */}
            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Neurology"
                className="w-full max-w-[500px] max-h-[500px] object-cover"
              />

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 left-6 sm:left-35 bg-white rounded-lg shadow-[0_15px_45px_rgba(0,0,0,0.08)] px-5 py-3 max-w-[280px]">

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#175CDD] mb-4"></div>

              {/* Title */}
              <h1 className="text-lg font-semibold text-[#0b1c48] leading-tight">
                Brain Health Experts
              </h1>

              {/* Text */}
              <p className="text-[#6c757d] text-sm leading-5 mt-2">
                Comprehensive neurological assessment and treatment
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default DepartmentDetails;