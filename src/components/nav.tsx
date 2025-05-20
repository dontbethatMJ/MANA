"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../assets/favicon.webp";
import { motion } from "framer-motion";
import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const sections = ["home", "services", "projects", "testimonials"];

interface NavProps {
  isVideoEnded: boolean;
}

const NavBar = ({ isVideoEnded }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClass = (section: string) =>
    `text-sm fira ${
      activeSection === section ? "text-white underline" : "text-white/80"
    } hover:text-white`;

  return (
    <div className="relative">
      <div className="z-50 w-[95%] max-w-[48rem] mx-auto fixed top-4 left-1/2 -translate-x-1/2">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: isVideoEnded ? 0 : -100, opacity: isVideoEnded ? 1 : 0 }}
          transition={{ 
            type: "tween",
            duration: 1,
            delay: isVideoEnded ? 0.2 : 0,
            ease: "linear"
          }}
          className="flex items-center justify-between rounded-xl border-[1px] border-[#ffffff19] bg-[#ffffff2d] py-3 px-4 shadow-lg backdrop-blur-md transition-all duration-300"
        >
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[2.5rem] h-[2.5rem]" />
            <a href="/" className="text-lg iceland text-white">
              ManaHouse
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={navLinkClass("home")}>
              Home
            </a>
            <a href="#services" className={navLinkClass("services")}>
              Services
            </a>
            <a href="#projects" className={navLinkClass("projects")}>
              Projects
            </a>
            <a href="#testimonials" className={navLinkClass("testimonials")}>
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="text-sm fira bg-transparent border-2 text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
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
                    className={`transition-transform duration-300 ${
                      isMenuOpen
                        ? "translate-y-[35px] translate-x-[4px] -rotate-45"
                        : ""
                    }`}
                  />
                  <path
                    d="M10,20 L50,20 Z"
                    className={`transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <path
                    d="M10,30 L50,30 Z"
                    className={`transition-transform duration-300 ${
                      isMenuOpen
                        ? "-translate-y-[22px] translate-x-[32px] rotate-45"
                        : ""
                    }`}
                  />
                </g>
              </svg>
            </button>
          </div>
        </motion.div>

        {isMenuOpen && (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.01, delay: 0 }}
            ref={menuRef}
            className="z-50 fixed top-[90px] right-[2.5%] p-6 rounded-xl border-[1px] border-[#ffffff19] bg-[#ffffff2d] shadow-lg backdrop-blur-md transition-all duration-300">
            <ul className="space-y-4 flex flex-col items-center">
              <li>
                <a href="#home" className={navLinkClass("home")} onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className={navLinkClass("services")} onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className={navLinkClass("projects")} onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className={navLinkClass("testimonials")} onClick={closeMenu}>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm fira text-white/80 rounded-full px-4 py-2 hover:text-white"
                  onClick={closeMenu}
                >
                  Contact Us
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-2">
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    <FaLinkedin size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://discord.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    <FaDiscord size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    <FaTwitter size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    <FaGithub size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    <FaYoutube size={18} />
                  </motion.a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
