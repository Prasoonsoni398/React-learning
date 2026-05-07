// sections/AboutHero.jsx

import mainImg from "../../assets/images/about-main.png";
import doctorImg from "../../assets/images/about-doctor.png";

const statsData = [
  {
    number: "15000",
    title: "Patients Treated",
  },

  {
    number: "25",
    title: "Years Experience",
  },

  {
    number: "50",
    title: "Medical Specialists",
  },
];

const AboutHero = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden mt-30">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-[#0b1c48] leading-tight">
              Compassionate Care for Every Family
            </h1>

            {/* Paragraph */}
            <p className="text-[#6c757d] text-lg leading-10 mt-10 max-w-3xl">
              For over two decades, we have been dedicated to providing
              exceptional healthcare services to our community. Our commitment
              goes beyond medical treatment—we believe in building lasting
              relationships with our patients and their families.
            </p>

            {/* Paragraph */}
            <p className="text-[#49536d] text-lg leading-10 mt-5 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f5f8ff] rounded-2xl px-4 py-6 text-center"
                >
                  {/* Number */}
                  <h1 className="text-3xl font-medium text-[#175CDD]">
                    {item.number}
                  </h1>

                  {/* Title */}
                  <p className="text-[#6c757d] text-sm font-semibold mt-4">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={mainImg}
              alt="About"
              className="w-full h-[300px] sm:h-[390px] lg:h-[450px] object-cover rounded-[2rem]"
            />

            {/* Floating Doctor Image */}
            <div className="absolute -bottom-10 right-0 sm:-right-8">
              <div className="w-35 h-35 sm:w-52 sm:h-52 rounded-full border-[10px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <img
                  src={doctorImg}
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
