import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  //console.log(mobileMenu);

  return (
    <>
      <nav className="bg-(--color-primary) lg:px-12 px-5 flex py-2 justify-between items-center sticky h-16 top-0 z-99">
        <Link to="/" className="flex items-center gap-3">
          <img src="header-logo.png" alt="haeder-logo" className="h-14" />
          <FaHeart className="text-white text-2xl animate-bounce mt-3" />
        </Link>
        <div className="hidden md:flex gap-2 items-center ">
          <Link
            to="/login"
            className="text-white text-md hover:outline rounded px-3 py-1.5 btn"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white px-3 py-1 rounded-sm text-(--color-primary) hover:outline hover:bg-transparent hover:text-white text-md"
          >
            Register
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <IoMdClose className="text-(--color-primary-content) text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-(--color-primary-content) text-2xl" />
            )}
          </button>
        </div>
      </nav>
      <div className="relative ">
        {mobileMenu && (
          <div className="absolute w-full h-25 top-16 z-90 px-2 md:hidden">
            <div className=" h-full mx-auto bg-(--color-secondary) grid gap-3 p-3">
              <Link
                to="/login"
                className="bg-white px-3 py-1 rounded-sm text-(--color-primary) hover:outline hover:bg-transparent hover:text-white text-md"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white px-3 py-1 rounded-sm text-(--color-primary) hover:outline hover:bg-transparent hover:text-white text-md"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
