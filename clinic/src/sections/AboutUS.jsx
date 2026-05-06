// src/components/AboutUs.jsx
import { PiHeartbeatLight } from "react-icons/pi";

const AboutUs = () => {
  return (
 <section className="bg-white py-15 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24 items-center">
    
    {/* Left Content */}
    <div>
      {/* Heading */}
      <h2 className="text-[#0B1F3A] text-[42px] leading-[62px] font-light tracking-[-0.5px] max-w-155">
        Compassionate Care, Advanced Medicine
      </h2>

      {/* Paragraph */}
      <p className="text-[#5F6673] text-md leading-[42px] font-normal mt-10 max-w-[720px]">
        For over two decades, we've been dedicated to providing exceptional
        healthcare that combines cutting-edge medical technology with the
        personal touch our patients deserve.
      </p>

      <p className="text-[#5F6673] text-md leading-[42px] font-normal mt-3 max-w-[760px]">
        Our multidisciplinary team of specialists works collaboratively to
        ensure every patient receives comprehensive care tailored to their
        unique needs. From preventive services to complex procedures, we
        maintain the highest standards of medical excellence while fostering
        an environment of trust and healing.
      </p>

      {/* Stats */}
      <div className="flex gap-24 mt-8">
        <div>
          <h3 className="text-[#175CDD] text-[56px] leading-none font-light">
            15000+
          </h3>

          <p className="text-[#6B7280] text-[18px] mt-3">
            Patients Served
          </p>
        </div>

        <div>
          <h3 className="text-[#175CDD] text-[56px] leading-none font-light">
            25+
          </h3>

          <p className="text-[#6B7280] text-[18px] mt-3">
            Years of Excellence
          </p>
        </div>

        <div>
          <h3 className="text-[#175CDD] text-[56px] leading-none font-light">
            50+
          </h3>

          <p className="text-[#6B7280] text-[18px] mt-3">
            Medical Specialists
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#175CDD] hover:bg-[#0F4FC4] transition-all duration-300 text-white text-[18px] font-medium px-10 py-4 rounded-2xl mt-7 cursor-pointer shadow-lg">
        Learn More About Us
      </button>
    </div>

    {/* Right Side */}
    <div className="relative flex justify-end">
      
      {/* Main Image */}
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
        alt="hospital"
        className="w-full max-w-155 h-110 object-cover rounded-[22px] shadow-2xl"
      />

      {/* Top Card */}
      <div className="absolute top-5 right-[-3%] bg-[#175CDD] rounded-lg px-10 py-4 shadow-2xl">
        <h3 className="text-white text-[28px] font-semibold text-center leading-none">
          25+
        </h3>

        <p className="text-white text-[13px] font-medium mt-3 text-center">
          Years of Trusted Care
        </p>
      </div>

      {/* Bottom Card */}
      <div className="absolute bottom-[-6%] left-[-4%] bg-white rounded-lg px-5 py-4 flex items-center gap-5 max-w-[350px] shadow-2xl">
        
        {/* Icon */}
        <div className="w-15 h-13 rounded-full bg-[#EEF4FF] flex justify-center items-center">
          <span className="text-[#175CDD] text-[28px]">
            <PiHeartbeatLight />
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-[#0B1F3A] text-lg font-semibold leading-none">
            24/7 Emergency Care
          </h3>

          <p className="text-[#6B7280] text-sm mt-2">
            Always here when you need us most
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default AboutUs;