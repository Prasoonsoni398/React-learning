const morePages = [
  {
    name: "Department Details",
    path: "/department-details",
  },
  {
    name: "Service Details",
    path: "/service-details",
  },
  {
    name: "Appointment",
    path: "/appointment",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
];
// components/DropdownMenu.jsx

import { Link } from "react-router-dom";

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-[220%] left-0 min-w-65 bg-white shadow-xl rounded-md py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[180%] transition-all duration-300 z-50">

      {
        items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-6 py-3 text-[16px] text-[#444444] hover:bg-gray-100 hover:text-[#1977cc] transition-all duration-300"
          >
            {item.name}
          </Link>
        ))
      }

    </div>
  );
};

export default DropdownMenu;