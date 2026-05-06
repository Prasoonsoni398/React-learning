// components/Navbar.jsx

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoChevronDown } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [morePagesOpen, setMorePagesOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // More Pages Dropdown
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
      name: "Frequently Asked Questions",
      path: "/faq",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Terms",
      path: "/terms",
    },
    {
      name: "Privacy",
      path: "/privacy",
    },
    {
      name: "404",
      path: "/404",
    },
  ];

  // Dropdown Menu
  const dropdownItems = [
    {
      name: "Dropdown 1",
      path: "/dropdown1",
    },

    {
      name: "Deep Dropdown",
      children: [
        {
          name: "Deep Dropdown 1",
          path: "/deep1",
        },
        {
          name: "Deep Dropdown 2",
          path: "/deep2",
        },
        {
          name: "Deep Dropdown 3",
          path: "/deep3",
        },
        {
          name: "Deep Dropdown 4",
          path: "/deep4",
        },
        {
          name: "Deep Dropdown 5",
          path: "/deep5",
        },
      ],
    },

    {
      name: "Dropdown 2",
      path: "/dropdown2",
    },

    {
      name: "Dropdown 3",
      path: "/dropdown3",
    },

    {
      name: "Dropdown 4",
      path: "/dropdown4",
    },
  ];

  // Normal Links
  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Departments",
      path: "/departments",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Doctors",
      path: "/doctors",
    },
  ];

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-white shadow-lg py-4"
          : "top-10 bg-[rgba(255,255,255,0.7)] py-5 "
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center  px-15 lg:p-0">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="2xl:text-3xl xl:text-2xl lg:text-xl text-lg text-black leading-none font-semibold">
            Clinic
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center 2xl:gap-10 xl:gap-8 gap-6">
          {/* Home */}
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#1977cc]"
                    : "text-black hover:text-[#1977cc]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={`absolute left-0 -bottom-2.5 h-0.5 bg-[#1977cc] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              )}
            </NavLink>
          </li>

          {/* Normal Links */}
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[16px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#1977cc]"
                      : "text-[#444444] hover:text-[#1977cc]"
                  }`
                }
              >
                {item.name}
              </NavLink>

              <NavLink to={item.path}>
                {({ isActive }) => (
                  <span
                    className={`absolute left-0 -bottom-2.5 h-0.5 bg-[#1977cc] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                )}
              </NavLink>
            </li>
          ))}

          {/* More Pages */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-[16px] font-medium text-[#444444] hover:text-[#1977cc] transition-all duration-300">
              More Pages
              <IoChevronDown className="text-[14px]" />
            </div>

            <span className="absolute left-0 -bottom-2.5 h-0.5 w-0 bg-[#1977cc] transition-all duration-300 group-hover:w-full"></span>

            <DropdownMenu items={morePages} />
          </li>

          {/* Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-[16px] font-medium text-[#444444] hover:text-[#1977cc] transition-all duration-300">
              Dropdown
              <IoChevronDown className="text-[14px]" />
            </div>

            <span className="absolute left-0 -bottom-2.5 h-0.5 w-0 bg-[#1977cc] transition-all duration-300 group-hover:w-full"></span>

            <DropdownMenu items={dropdownItems} />
          </li>

          {/* Contact */}
          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-1 text-[16px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#1977cc]"
                    : "text-[#444444] hover:text-[#1977cc]"
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={`absolute left-0 -bottom-2.5 h-0.5 bg-[#1977cc] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-[32px] cursor-pointer text-[#2c4964]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-999 transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Menu Box */}
        <div
          className={`absolute top-4 left-4 right-4 bg-white rounded-md p-5 transition-all duration-500 overflow-y-auto ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          style={{ height: "92vh" }}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-5">
            <RxCross2
              className="text-3xl cursor-pointer text-[#2c4964]"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-7">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[17px] font-medium ${
                    isActive ? "text-[#1977cc]" : "text-[#444444]"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Normal Links */}
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[17px] font-medium ${
                      isActive ? "text-[#1977cc]" : "text-[#444444]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* More Pages */}
            <div className="flex flex-col gap-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setMorePagesOpen(!morePagesOpen)}
              >
                <h1
                  className={`text-[17px] font-medium ${
                    morePagesOpen ? "text-[#1977cc]" : "text-[#444444]"
                  }`}
                >
                  More Pages
                </h1>

                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <IoChevronDown
                    className={`transition-all duration-300 ${
                      morePagesOpen ? "rotate-180 text-[#1977cc]" : ""
                    }`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  morePagesOpen
                    ? "max-h-125 border rounded-md p-5"
                    : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {morePages.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-[16px] text-[#444]"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div className="flex flex-col gap-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <h1 className="text-[17px] font-medium text-[#444444]">
                  Dropdown
                </h1>

                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <IoChevronDown
                    className={`transition-all duration-300 ${
                      dropdownOpen ? "rotate-180 text-[#1977cc]" : ""
                    }`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  dropdownOpen
                    ? "max-h-175 border rounded-md p-5"
                    : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {dropdownItems.map((item, index) =>
                    item.children ? (
                      <div key={index} className="flex flex-col gap-4">
                        {/* Deep Dropdown */}
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => setDeepDropdownOpen(!deepDropdownOpen)}
                        >
                          <h1 className="text-[16px] text-[#444]">
                            {item.name}
                          </h1>

                          <IoChevronDown
                            className={`transition-all duration-300 ${
                              deepDropdownOpen
                                ? "rotate-180 text-[#1977cc]"
                                : ""
                            }`}
                          />
                        </div>

                        {/* Deep Dropdown Content */}
                        {/* Deep Dropdown Content */}
                        {
                        deepDropdownOpen && (
                          <div
                            className="
                                absolute top-0 right-full mr-2 min-w-60 bg-white border rounded-md shadow-xl p-4 z-99
                            "
                          >
                            <div className="flex flex-col gap-4">
                              {item.children.map((child, childIndex) => (
                                <NavLink
                                  key={childIndex}
                                  to={child.path}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-[15px] text-[#444] hover:text-[#1977cc] transition-all duration-300"
                                >
                                  {child.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        key={index}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-[16px] text-[#444]"
                      >
                        {item.name}
                      </NavLink>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Contact */}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[17px] font-medium ${
                    isActive ? "text-[#1977cc]" : "text-[#444444]"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
