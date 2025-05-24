import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/favicon.webp';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  onContactClick: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContactClick(email);
  };
  
  const socialLinks = [
    { icon: <FaLinkedin className="text-xl" />, url: "#" },
    { icon: <FaDiscord className="text-xl" />, url: "#" },
    { icon: <FaTwitter className="text-xl" />, url: "#" },
    { icon: <FaGithub className="text-xl" />, url: "#" },
    { icon: <FaYoutube className="text-xl" />, url: "#" },
  ];

  return (
    <footer className="bg-black w-full pt-16 pb-8 px-6 md:px-12 lg:px-32 border-t border-[#ffffff19]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img src={logo} alt="ManaHouse Logo" className="w-10 h-10 mr-3" />
              <span className="text-2xl iceland text-white">ManaHouse</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Crafting immersive 3D worlds, games, and experiences that push boundaries and captivate audiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label={`${social.icon.type} social link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Spells We Use
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer hover:line-through" onClick={() => alert("Not yet :(")}>
                    Careers
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => onContactClick('')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Ready to level up your project?</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Or are you a startup struggling with Art/Development/Designing?
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
              <div className="relative flex-grow">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ManaHouse. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;