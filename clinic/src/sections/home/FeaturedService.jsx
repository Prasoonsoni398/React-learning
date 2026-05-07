// sections/FeaturedServices.jsx

import featuredImg from "../../assets/images/featured-service.png";

import maternalImg from "../../assets/images/maternal.png";
import vaccineImg from "../../assets/images/vaccine.png";
import emergencyImg from "../../assets/images/emergency.png";
import techImg from "../../assets/images/technology.png";

import { FaCapsules, FaStethoscope } from "react-icons/fa";
import { RiPulseLine } from "react-icons/ri";

const serviceList = [
  {
    title: "Dermatology Clinic",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",

    icon: <FaCapsules />,
  },

  {
    title: "Surgery Center",
    description:
      "Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at sem.",

    icon: <FaStethoscope />,
  },

  {
    title: "Diagnostics Lab",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed magna.",

    icon: <RiPulseLine />,
  },
];

const bottomServices = [
  {
    image: maternalImg,
    title: "Maternal Care",
    description: "Expert pregnancy & delivery support",
  },

  {
    image: vaccineImg,
    title: "Vaccination",
    description: "Complete immunization programs",
  },

  {
    image: emergencyImg,
    title: "Emergency Care",
    description: "24/7 critical care services",
  },

  {
    image: techImg,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment",
  },
];

const FeaturedServices = () => {
  return (
    <section className="w-full py-15 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#0b1c48]">
            Featured Services
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

        {/* Main Section */}
        <div className="grid lg:grid-cols-[1.7fr_0.8fr] gap-14 mt-10 ">
          {/* Left */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-[1.5rem] group">
              <img
                src={featuredImg}
                alt="Featured"
                className="w-full h-[250px] sm:h-[400px] lg:h-[470px] object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#175CDD]/30"></div>

              {/* Badge */}
              <div className="absolute top-7 left-7 bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-lg">
                <RiPulseLine className="text-[#175CDD] text-xl" />

                <span className="text-[#0b1c48] font-medium">
                  Emergency Care
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-10">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-light text-[#0b1c48] leading-tight">
                Comprehensive Healthcare Excellence
              </h1>

              <p className="text-[#6c757d] text-base text-lg leading-9 mt-3">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae donec velit neque.
              </p>

              <button className="text-[#175CDD] text-lg mt-8 border-b border-[#175CDD] pb-1 cursor-pointer hover:tracking-wide transition-all duration-300">
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-7">
            {serviceList.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#edf3ff] flex items-center justify-center text-[#175CDD] text-xl shrink-0">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h1 className="text-lg font-light text-[#0b1c48]">
                      {item.title}
                    </h1>

                    <p className="text-[#6c757d] text-sm leading-8 mt-2">
                      {item.description}
                    </p>

                    <button className="text-[#175CDD] font-semibold mt-3 cursor-pointer hover:translate-x-2 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-15">
          {bottomServices.map((item, index) => (
            <div key={index} className="text-center group cursor-pointer">
              {/* Image */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mx-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Title */}
              <h1 className="text-2xl font-light text-[#0b1c48] mt-7">
                {item.title}
              </h1>

              {/* Description */}
              <p className="text-[#6c757d] text-base mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
