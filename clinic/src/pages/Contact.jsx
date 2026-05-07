// pages/Contact.jsx

import { FaMapMarkerAlt, FaEnvelope, FaHeadphones } from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pt-35">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-[2.8rem] lg:text-[3.5rem] font-light text-[#0b1c48]">
          Contact
        </h1>

        <p className="max-w-4xl mx-auto text-[#6c757d] text-[1rem] leading-8 mt-5 lg:px-0 px-8">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#f3f5f7] mt-16">
        <div className="max-w-7xl mx-auto lg:px-4 px-8 py-6 flex items-center gap-4 text-[1rem]">
          <span className="text-[#175CDD] cursor-pointer">
            Home
          </span>

          <span className="text-[#9ca3af]">/</span>

          <span className="text-[#0b1c48]">Contact</span>
        </div>
      </div>

     {/* Contact Section */}
<div className="max-w-7xl mx-auto lg:px-4 px-8 mt-24">

  <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-20 items-start">

    {/* Left Info */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-14 pt-2"
    >

      {/* Address */}
      <div className="flex items-start gap-6">

        <div className="w-14 h-14 rounded-full bg-[#eef4ff] flex items-center justify-center shrink-0">
          <FaMapMarkerAlt className="text-[#175CDD] text-[1rem]" />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-[#0b1c48] leading-none">
            Our Address
          </h1>

          <p className="text-[#6c757d] text-sm mt-2 leading-7">
            1842 Maple Avenue, Portland, Oregon 97204
          </p>
        </div>

      </div>

      {/* Email */}
      <div className="flex items-start gap-6">

        <div className="w-14 h-14 rounded-full bg-[#eef4ff] flex items-center justify-center shrink-0">
          <FaEnvelope className="text-[#175CDD] text-[1rem]" />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-[#0b1c48] leading-none">
            Email Address
          </h1>

          <p className="text-[#6c757d] text-sm mt-2 leading-7">
            info@example.com
          </p>

          <p className="text-[#6c757d] text-sm leading-7">
            contact@example.com
          </p>
        </div>

      </div>

      {/* Hours */}
      <div className="flex items-start gap-6">

        <div className="w-14 h-14 rounded-full bg-[#eef4ff] flex items-center justify-center shrink-0">
          <FaHeadphones className="text-[#175CDD] text-[1rem]" />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-[#0b1c48] leading-none">
            Hours of Operation
          </h1>

          <p className="text-[#6c757d] text-sm mt-2 leading-7">
            Sunday-Fri: 9 AM - 6 PM
          </p>

          <p className="text-[#6c757d] text-sm leading-7">
            Saturday: 9 AM - 4 PM
          </p>
        </div>

      </div>

    </motion.div>

    {/* Right Form */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-[1.8rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-8 sm:px-10 lg:px-10 lg:py-8 py-10"
    >

      <h1 className="text-3xl font-extrabold text-[#0b1c48] leading-tight">
        Send us a Message
      </h1>

      <p className="text-[#6c757d] text-md leading-7 mt-4 max-w-3xl">
        Have questions or want to learn more? Reach out to us and our
        team will get back to you shortly.
      </p>

      {/* Form */}
      <form className="mt-5 space-y-4">

        {/* Top Inputs */}
        <div className="grid sm:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[50px] border border-[#d1d5db] rounded-xl px-6 text-[1rem] text-[#0b1c48] placeholder:text-[#9ca3af] outline-none focus:border-[#175CDD] transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-[50px] border border-[#d1d5db] rounded-xl px-6 text-[1rem] text-[#0b1c48] placeholder:text-[#9ca3af] outline-none focus:border-[#175CDD] transition-all duration-300"
          />

        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full h-[50px] border border-[#d1d5db] rounded-xl px-6 text-[1rem] text-[#0b1c48] placeholder:text-[#9ca3af] outline-none focus:border-[#175CDD] transition-all duration-300"
        />

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border border-[#d1d5db] rounded-xl p-6 text-[1rem] text-[#0b1c48] placeholder:text-[#9ca3af] outline-none resize-none focus:border-[#175CDD] transition-all duration-300"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-[64px] bg-[#175CDD] hover:bg-[#0f4fc5] rounded-xl text-white text-[1rem] font-semibold transition-all duration-300 cursor-pointer"
        >
          Send Message
        </button>

      </form>

    </motion.div>

  </div>

</div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.902711178663!2d-74.00601568459367!3d40.71277577933056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3164b5c3b1%3A0x8d489f5e6d6c6c6!2sNew%20York!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          className="w-full h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
