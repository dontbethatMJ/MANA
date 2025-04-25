"use client";

import { useState, useRef } from "react";
import logo from "../assets/favicon.webp";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.div
      className="z-50 w-[95%] max-w-[48rem] mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between rounded-xl border-[1px] border-[#ffffff19] bg-[#ffffff2d] py-3 px-4 shadow-lg backdrop-blur-md transition-all duration-300"
    >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[2.5rem] h-[2.5rem]" />
        <a href="/" className="text-lg iceland text-white">
          ManaHouse
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm fira text-white/80 hover:text-white">
          Home
        </a>
        <a
          href="#services"
          className="text-sm fira text-white/80 hover:text-white"
        >
          Services
        </a>
        <a
          href="#projects"
          className="text-sm fira text-white/80 hover:text-white"
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className="text-sm fira text-white/80 hover:text-white"
        >
          Testimonials
        </a>
      </div>

      <div className="hidden md:flex">
        <a
          href="#contact"
          className="text-sm fira bg-transparent border-2 text-white rounded-full px-6 py-2 hover:bg-white hover:text-black"
        >
          Contact Us
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M10,10 L50,10 Z"
                className={`transition-transform duration-500 ${
                  isMenuOpen ? "translate-y-[35px] translate-x-[4px] -rotate-45" : ""
                }`}
              />
              <path
                d="M10,20 L50,20 Z"
                className={`transition-opacity duration-500 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <path
                d="M10,30 L50,30 Z"
                className={`transition-transform duration-500 ${
                  isMenuOpen ? "-translate-y-[22px] translate-x-[32px] rotate-45" : ""
                }`}
              />
            </g>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-[70px] right-0 p-6 rounded-xl border-[1px] border-[#ffffff19] bg-[#ffffff2d] shadow-lg backdrop-blur-md transition-all duration-300"
        >
          <ul className="space-y-4 flex flex-col items-center">
            <li>
              <a
                href="#home"
                className="text-sm fira text-white/80 hover:text-white"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm fira text-white/80 hover:text-white"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-sm fira text-white/80 hover:text-white"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sm fira text-white/80 hover:text-white"
                onClick={closeMenu}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm fira text-white/80 hover:text-white"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
