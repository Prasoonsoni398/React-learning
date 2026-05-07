// sections/FindDoctor.jsx

import { FaSearch, FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

import { IoPersonOutline } from "react-icons/io5";
import { RiPulseLine } from "react-icons/ri";
import { PiMedalLight } from "react-icons/pi";

// Replace all image imports with these online images

const doctorsData = [
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",

    name: "Dr. Amanda Foster",
    specialty: "Cardiology Specialist",
    experience: "14 years experience",
    rating: "4.9",
    reviews: "127 reviews",
    button: "Book Now",
    status: "bg-green-500",
  },

  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",

    name: "Dr. Marcus Johnson",
    specialty: "Neurology Expert",
    experience: "16 years experience",
    rating: "4.8",
    reviews: "89 reviews",
    button: "Schedule",
    status: "bg-orange-400",
  },

  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",

    name: "Dr. Rachel Williams",
    specialty: "Pediatrics Care",
    experience: "11 years experience",
    rating: "5.0",
    reviews: "203 reviews",
    button: "Book Now",
    status: "bg-green-500",
  },

  {
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",

    name: "Dr. David Chen",
    specialty: "Orthopedic Surgery",
    experience: "22 years experience",
    rating: "4.7",
    reviews: "156 reviews",
    button: "Schedule",
    status: "bg-gray-400",
  },

  {
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop",

    name: "Dr. Victoria Torres",
    specialty: "Dermatology Care",
    experience: "9 years experience",
    rating: "4.5",
    reviews: "74 reviews",
    button: "Book Now",
    status: "bg-green-500",
  },

  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",

    name: "Dr. Benjamin Lee",
    specialty: "Oncology Treatment",
    experience: "19 years experience",
    rating: "4.9",
    reviews: "194 reviews",
    button: "Schedule",
    status: "bg-green-500",
  },
];
const FindDoctor = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-extralight text-[#0b1c48]">
            Find A Doctor
          </h1>

          {/* Line */}
          <div className="w-40 h-px bg-gray-300 mx-auto mt-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-px w-14 h-1 bg-[#175CDD] rounded-full"></div>
          </div>

          <p className="text-[#6c757d] text-md mt-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mt-16">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-thin text-[#3f434c] leading-tight">
            Find Your Perfect Healthcare Provider
          </h1>

          <p className="text-[#6c757d] text-md sm:text-lg mt-6">
            Search through our comprehensive directory of experienced medical
            professionals
          </p>
        </div>

        {/* Search Box */}
      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]  sm:rounded-full overflow-hidden">

  <div className="grid sm:grid-cols-3 grid-cols-1 items-center">

    {/* Input */}
    <div className="flex items-center gap-4 px-5 sm:px-7 lg:px-8 py-5 sm:py-6 lg:py-7 border-b lg:border-b-0 lg:border-r border-gray-200">

      <IoPersonOutline className="text-[#9ca3af] text-xl sm:text-2xl shrink-0" />

      <input
        type="text"
        placeholder="Enter doctor name"
        className="w-full outline-none text-base sm:text-lg font-light text-[#0b1c48] placeholder:text-[#9ca3af]"
      />

    </div>

    {/* Select */}
    <div className="flex items-center gap-4 px-5 sm:px-7 lg:px-8 py-5 sm:py-6 lg:py-7 border-b sm:border-b-0 lg:border-r border-gray-200">

      <RiPulseLine className="text-[#9ca3af] text-xl sm:text-2xl shrink-0" />

      <select className="w-full bg-transparent outline-none text-base sm:text-lg font-light text-[#0b1c48] cursor-pointer appearance-none">

        <option>All Specialties</option>
        <option>Cardiology</option>
        <option>Neurology</option>
        <option>Pediatrics</option>

      </select>

    </div>

    {/* Button */}
    <div className="p-3">

      <button className="bg-[#175CDD] hover:bg-[#0f4fc5] text-white px-6 sm:px-10 py-4 sm:py-5 sm:rounded-full rounded-xl flex items-center justify-center gap-3 sm:gap-2 text-lg sm:text-sm lg:text-xl font-medium transition-all duration-500 cursor-pointer w-full">

        <FaSearch className="text-base sm:text-xl" />

        Find Doctors

      </button>

    </div>

  </div>

</div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {doctorsData.map((doctor, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[2rem] p-7 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* Top */}
              <div className="flex gap-5">
                {/* Image */}
                <div className="relative shrink-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-[1.3rem] object-cover"
                  />

                  {/* Status */}
                  <div
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${doctor.status}`}
                  ></div>
                </div>

                {/* Info */}
                <div>
                  <h1 className="text-[1.1rem] sm:text-[1.3rem] font-light text-[#0b1c48] leading-tight">
                    {doctor.name}
                  </h1>

                  {/* Specialty */}
                  <div className="inline-flex bg-[#edf3ff] text-[#175CDD] px-3 py-1.5 rounded-full text-sm font-medium mt-3">
                    {doctor.specialty}
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-2 mt-4">
                    <PiMedalLight className="text-[#175CDD] text-lg" />

                    <p className="text-[#6c757d] text-sm">
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-3 mt-8">
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-[#f4b400] text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                {/* Rating */}
                <span className="text-xl font-semibold text-[#0b1c48]">
                  {doctor.rating}
                </span>

                {/* Reviews */}
                <span className="text-[#9ca3af] text-sm">
                  ({doctor.reviews})
                </span>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <button className="border border-gray-300 text-[#4b5563] py-3 rounded-[1rem] text-sm font-medium hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  View Details
                </button>

                <button className="bg-[#175CDD] text-white py-3 rounded-[1rem] text-sm font-medium hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {doctor.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <button className="border-2 border-[#175CDD] text-[#175CDD] px-8 py-4 rounded-full text-md font-medium flex items-center gap-4 hover:bg-[#175CDD] hover:text-white transition-all duration-500 cursor-pointer">
            View All Doctors
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindDoctor;
