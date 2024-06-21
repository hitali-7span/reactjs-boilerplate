import React, { useState } from "react";
import BrandLogo from "@/assets/icons/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Service",
      link: "/service",
    },
    {
      id: 3,
      label: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 4,
      label: "About",
      link: "/about",
    },
  ];

  return (
    <header
      className={`bg-primary-800 justify-between items-center lg:flex lg:flex-row p-5 md:px-12 font-body  xl:px-32 ${
        isMobileMenuOpen ? "h-screen" : "lg:h-32"
      }`}
    >
      <div className="flex justify-between items-center w-full lg:w-36">
        <Link to="/">
          <img
            src={BrandLogo}
            className="h-12 w-20 md:h-24 md:w-36 mb-4 lg:mb-0"
            alt="Brand Logo"
          />
        </Link>
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row justify-center`}
      >
        <ul className="flex flex-col gap-4 lg:gap-6 text-lg 2xl:gap-8 lg:flex-row">
          {links.map((item) => (
            <li className="text-center" key={item.id}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
