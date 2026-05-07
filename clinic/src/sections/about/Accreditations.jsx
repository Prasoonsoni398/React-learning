// sections/Accreditations.jsx

import doctorImg1 from "../../assets/images/accreditations1.png";
import doctorImg2 from "../../assets/images/accreditations2.png";
import doctorImg3 from "../../assets/images/accreditations3.png";
import doctorImg4 from "../../assets/images/accreditations4.png";
import doctorImg5 from "../../assets/images/accreditations5.png";

const accreditationData = [
  {
    logo: doctorImg1,
  },

  {
    logo: doctorImg2,
  },

  {
    logo: doctorImg3,
  },

  {
    logo: doctorImg4,
  },

  {
    logo: doctorImg5,
  },
];

const Accreditations = () => {
  return (
    <section className="w-full bg-white py-24">

      {/* Container */}
      <div className="max-w-7xl mx-auto lg:px-4 px-8 ">

        {/* Main Box */}
        <div className="bg-[#f7f9fc9c] rounded-[2rem] px-6 sm:px-10 lg:px-20 py-20">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-3xl sm:text-4xl font-extralight text-[#0b1c48]">

              Accreditations & Certifications

            </h1>

            <p className="text-[#6c757d] text-base leading-8 mt-5 max-w-2xl mx-auto">

              Recognized by leading healthcare organizations for our commitment to quality care

            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">

            {
              accreditationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-lg h-36 flex items-center justify-center overflow-hidden p-6 group"
                >

                  <img
                    src={item.logo}
                    alt="Accreditation"
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100  cursor-pointer"
                  />

                </div>
              ))
            }

          </div>

        </div>

      </div>

    </section>
  );
};

export default Accreditations;