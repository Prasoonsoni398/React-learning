// sections/CoreValues.jsx

import { PiHeartbeatLight } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { BsLightbulb } from "react-icons/bs";

const valuesData = [
  {
    icon: <PiHeartbeatLight />,
    title: "Compassion",
    description:
      "Providing care with empathy and understanding for every patient's unique needs and circumstances.",
  },

  {
    icon: <GoShieldCheck />,
    title: "Excellence",
    description:
      "Maintaining the highest standards of medical care through continuous learning and innovation.",
  },

  {
    icon: <PiUsers />,
    title: "Integrity",
    description:
      "Building trust through honest communication and ethical practices in all our interactions.",
  },

  {
    icon: <BsLightbulb  />,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and treatments to improve patient outcomes.",
  },
];

const CoreValues = () => {
  return (
    <section className="w-full bg-white py-24">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-4xl sm:text-5xl font-extralight text-[#0b1c48]">

            Our Core Values

          </h1>

          <p className="text-[#6c757d] text-base leading-8 mt-6 max-w-2xl mx-auto">

            These principles guide everything we do in our commitment to exceptional healthcare

          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-24 ">

          {
            valuesData.map((item, index) => (
              <div
                key={index}
                className="text-center transform hover:-translate-y-2 transition-transform duration-300"
              >

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#eef4ff] flex items-center justify-center text-[#175CDD] text-4xl mx-auto hover:bg-[#175CDD] hover:text-white">

                  {item.icon}

                </div>

                {/* Title */}
                <h1 className="text-2xl font-light text-[#0b1c48] mt-8">

                  {item.title}

                </h1>

                {/* Description */}
                <p className="text-[#6c757d] text-sm font-semibold leading-8 mt-5 max-w-xs mx-auto">

                  {item.description}

                </p>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
};

export default CoreValues;
