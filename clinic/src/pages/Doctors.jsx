import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  PiMedalLight,
  PiHospitalLight,
} from "react-icons/pi";

const doctorsData = [
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Marcus Johnson",
    specialty: "Cardiologist",
    experience: "15+ Years Experience",
    department: "Cardiology Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Sarah Williams",
    specialty: "Neurologist",
    experience: "12+ Years Experience",
    department: "Neurology Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    experience: "18+ Years Experience",
    department: "Orthopedics Dept.",
  },

  {
    image:
      "https://www.lilavatihospital.com/uploads/source/doctors/1758116306_Dr-Ajit.webp",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10+ Years Experience",
    department: "Pediatrics Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. David Thompson",
    specialty: "Dermatologist",
    experience: "14+ Years Experience",
    department: "Dermatology Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Lisa Anderson",
    specialty: "Oncologist",
    experience: "16+ Years Experience",
    department: "Oncology Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Robert Martinez",
    specialty: "Emergency Medicine",
    experience: "11+ Years Experience",
    department: "Emergency Dept.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1200&auto=format&fit=crop",
    name: "Dr. Jennifer Lee",
    specialty: "Radiologist",
    experience: "13+ Years Experience",
    department: "Radiology Dept.",
  },
];

const Doctors = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Hero */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto lg:px-4 px-8 text-center pt-16 pb-20 mt-25">
          <h1 className="text-[2.3rem] sm:text-[2.8rem] font-light text-[#0b1c48]">
            Doctors
          </h1>

          <p className="text-[#6c757d] text-[0.95rem] leading-8 max-w-3xl mx-auto mt-5">
            Odio et unde deleniti. Deserunt numquam exercitationem.
            Officiis quo odio sint voluptas consequatur ut a odio
            voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="bg-[#f5f5f5] py-6 border-y border-gray-100">
          <div className="max-w-7xl mx-auto lg:px-4 px-8 flex items-center gap-3 text-[1rem]">
            <span className="text-[#175CDD] cursor-pointer hover:underline">
              Home
            </span>

            <span className="text-[#9ca3af]">/</span>

            <span className="text-[#0b1c48]">Doctors</span>
          </div>
        </div>
      </div>

      {/* Doctors Cards */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {doctorsData.map((doctor, index) => {
            const row = Math.floor(index / 4);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: row * 0.3,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-[1.6rem] py-7 px-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative w-fit mx-auto">
                  <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#175CDD]/0 group-hover:bg-[#175CDD]/50 transition-all duration-500"></div>
                  </div>

                  {/* Social Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#175CDD] cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <FaFacebookF className="text-sm" />
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#175CDD] cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <FaInstagram className="text-sm" />
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#175CDD] cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <FaLinkedinIn className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h1 className="text-xl font-extrabold text-[#0b1c48] mt-5 ">
                  {doctor.name}
                </h1>

                {/* Specialty */}
                <p className="text-[#175CDD] text-[1rem] font-bold mt-2">
                  {doctor.specialty}
                </p>

                {/* Description */}
                <p className="text-[#6c757d] text-xs leading-5 font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>

                {/* Info */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-[#6c757d] text-[0.92rem]">
                    <PiMedalLight className="text-[#175CDD] text-lg" />

                    {doctor.experience}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[#6c757d] text-[0.92rem]">
                    <PiHospitalLight className="text-[#175CDD] text-lg" />

                    {doctor.department}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-8 bg-[#175CDD] hover:bg-[#0f4fc5] text-white px-8 py-4 rounded-full text-[0.95rem] font-medium transition-all duration-300 cursor-pointer hover:scale-105">
                  Book Appointment
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Doctors;