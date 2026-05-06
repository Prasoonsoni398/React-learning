// components/DropdownMenu.jsx

import { NavLink } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const DropdownMenu = ({ items }) => {
  return (
    <div
      className="
        absolute
        top-[170%]
        left-0
        min-w-60
        bg-white
        rounded-lg
        shadow-2xl
        py-3
        opacity-0
        invisible
        translate-y-3
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all
        duration-300
        z-50
      "
    >

      {
        items.map((item, index) => (

          item.children ? (

            // Deep Dropdown
            <div
              key={index}
              className="relative group/deep"
            >

              <div className="flex items-center justify-between px-6 py-3 text-[16px] text-[#444] hover:bg-gray-50 hover:text-[#1977cc] transition-all duration-300 cursor-pointer">

                {item.name}

                <IoChevronForward className="text-[14px]" />

              </div>

              {/* Nested Dropdown */}
              <div
                className="
                  absolute
                  top-0
                  left-full
                  ml-1
                  min-w-60
                  bg-white
                  rounded-lg
                  shadow-2xl
                  py-3
                  opacity-0
                  invisible
                  translate-x-3
                  group-hover/deep:opacity-100
                  group-hover/deep:visible
                  group-hover/deep:translate-x-0
                  transition-all
                  duration-300
                "
              >

                {
                  item.children.map((child, childIndex) => (
                    <NavLink
                      key={childIndex}
                      to={child.path}
                      className="block px-6 py-3 text-[15px] text-[#444] hover:bg-gray-50 hover:text-[#1977cc] transition-all duration-300"
                    >
                      {child.name}
                    </NavLink>
                  ))
                }

              </div>

            </div>

          ) : (

            // Normal Dropdown Item
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-3 text-[16px] transition-all duration-300 ${
                  isActive
                    ? "text-[#1977cc] bg-gray-50"
                    : "text-[#444444] hover:text-[#1977cc] hover:bg-gray-50"
                }`
              }
            >
              {item.name}
            </NavLink>

          )
        ))
      }

    </div>
  );
};

export default DropdownMenu;