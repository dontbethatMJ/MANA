import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import logo from '../assets/favicon.webp';
import { useState, useEffect } from 'react';

interface FooterProps {
  onContactClick: (email: string) => void;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, activeTab, onTabChange }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'cookies', label: 'Cookie Policy' }
  ];

  const getTabContent = (tabId: string) => {
    const tabContentClass = "space-y-4 md:space-y-6 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500";
    
    switch (tabId) {
      case 'privacy':
        return (
          <div className={tabContentClass}>
            <section>
              {/* <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Privacy Policy</h2> */}
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Effective Date: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                ManaHouse ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [ManaHouse Website URL] or engage with our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">1. Information We Collect</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-300 font-medium">Personal Information:</p>
                <p className="text-sm md:text-base text-gray-300">
                  When you fill out forms, contact us, or use our services, we may collect information such as your name, email address, phone number, and company details.
                </p>
                <p className="text-sm md:text-base text-gray-300 font-medium mt-3 md:mt-4">Non-Personal Information:</p>
                <p className="text-sm md:text-base text-gray-300">
                  This includes IP addresses, browser types, and usage data collected through cookies and other tracking technologies.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">2. How We Use Your Information</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Communicate with you regarding updates, offers, and inquiries</li>
                <li>Improve user experience and analyze site performance</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">3. Cookies and Tracking Technologies</h3>
              <p className="text-sm md:text-base text-gray-300">
                We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">4. Third-Party Sharing</h3>
              <p className="text-sm md:text-base text-gray-300">
                We do not sell or share your personal information with third parties except as necessary to deliver our services, comply with legal obligations, or with your consent.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">5. Data Security</h3>
              <p className="text-sm md:text-base text-gray-300">
                We implement robust security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">6. Your Rights</h3>
              <p className="text-sm md:text-base text-gray-300">
                You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:contact@manahouse.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@manahouse.in</a> for assistance.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">7. Changes to This Policy</h3>
              <p className="text-sm md:text-base text-gray-300">
                We may update this Privacy Policy from time to time. The updated version will be posted with the "Effective Date" at the top.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">8. Contact Us</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                For any questions or concerns, please contact us at:
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Email: <a href="mailto:contact@manahouse.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@manahouse.in</a>
              </p>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className={tabContentClass}>
            <section>
              {/* <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Terms of Service</h2> */}
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Effective Date: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Welcome to ManaHouse! By accessing or using our website and services, you agree to the following terms and conditions. Please read them carefully.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">1. Acceptance of Terms</h3>
              <p className="text-sm md:text-base text-gray-300">
                By accessing our website or using our services, you agree to comply with and be bound by these terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">2. Services Provided</h3>
              <p className="text-sm md:text-base text-gray-300">
                ManaHouse specializes in creating 3D models, games, animations, and other digital assets. Our services are delivered based on project agreements and client requirements.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">3. User Obligations</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
                <li>Provide accurate information during any interaction with us</li>
                <li>Do not engage in any activity that disrupts or harms our website or services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">4. Intellectual Property</h3>
              <p className="text-sm md:text-base text-gray-300">
                All content on this website, including but not limited to logos, designs, and digital assets, is the property of ManaHouse. You may not reproduce or distribute this content without our written permission.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">5. Payment and Refunds</h3>
              <p className="text-sm md:text-base text-gray-300">
                Payment terms and refund policies will be outlined in the specific service agreements.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">6. Limitation of Liability</h3>
              <p className="text-sm md:text-base text-gray-300">
                ManaHouse is not responsible for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">7. Termination</h3>
              <p className="text-sm md:text-base text-gray-300">
                We reserve the right to terminate or restrict access to our services if these terms are violated.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">8. Governing Law</h3>
              <p className="text-sm md:text-base text-gray-300">
                These terms shall be governed by the laws of India.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">9. Changes to Terms</h3>
              <p className="text-sm md:text-base text-gray-300">
                We may modify these terms at any time. Continued use of our website or services indicates acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">10. Contact Us</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                For questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Email: <a href="mailto:contact@manahouse.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@manahouse.in</a>
              </p>
            </section>
          </div>
        );

      case 'cookies':
        return (
          <div className={tabContentClass}>
            <section>
              {/* <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Cookie Policy</h2> */}
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                At Mana House, we value your privacy and strive to provide a seamless and personalized user experience. To achieve this, we use cookies on our website. This Cookies Policy explains what cookies are, the types of cookies we use, and how you can manage your cookie preferences.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">What Are Cookies?</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They help us remember your preferences, enhance website performance, and provide relevant content and advertisements.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Types of Cookies We Use</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-md md:text-lg font-medium text-white mb-2">Essential Cookies</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    These cookies are necessary for our website to function properly. They enable core functionalities like navigating the site, accessing secure areas, and ensuring a smooth user experience.
                  </p>
                  <p className="text-sm md:text-base text-gray-300 mt-2">
                    Example: Remembering your login credentials or keeping track of your cart items.
                  </p>
                </div>

                <div>
                  <h4 className="text-md md:text-lg font-medium text-white mb-2">Performance Cookies</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    These cookies help us understand how visitors interact with our website by collecting anonymous data about pages visited, time spent, and any errors encountered. This information allows us to improve the website's performance.
                  </p>
                </div>

                <div>
                  <h4 className="text-md md:text-lg font-medium text-white mb-2">Functional Cookies</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    Functional cookies enhance your experience by remembering your preferences, such as language selection, region, or font size.
                  </p>
                </div>

                <div>
                  <h4 className="text-md md:text-lg font-medium text-white mb-2">Advertising Cookies</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    Advertising cookies deliver ads tailored to your interests by analyzing your browsing habits. These cookies may also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">How We Use Cookies</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">We use cookies to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
                <li>Improve website performance and usability</li>
                <li>Personalize your experience based on your preferences</li>
                <li>Deliver relevant ads and promotions</li>
                <li>Analyze website traffic and user behavior for continuous improvement</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Managing Cookies</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                You can manage or disable cookies in the settings of your browser or through our cookie preferences tool on the website. Please note that disabling certain cookies may affect the functionality of our site.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Consent</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                By continuing to use our website, you agree to the use of cookies as described in this policy. You can change your preferences at any time through the "Cookie Settings" link on our website.
              </p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Contact Us</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                If you have any questions about this Cookies Policy, please contact us at:
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Email: <a href="mailto:contact@manahouse.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@manahouse.in</a>
              </p>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 rounded-xl"
      onClick={handleOverlayClick}
    >
      <div className="bg-white/10 w-full max-w-4xl rounded-2xl relative backdrop-blur-xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-3 md:p-4 border-b border-gray-800">
          <div className="flex space-x-2 md:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors ml-3 md:ml-4"
          >
            <IoClose size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        <div className="p-4 md:p-6 text-gray-300 flex-1 overflow-hidden">
          {getTabContent(activeTab)}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('privacy');
  
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (isPopupOpen) {
        navbar.classList.add('transition-all', 'duration-300');
        navbar.offsetHeight;
        navbar.classList.add('opacity-0', 'pointer-events-none', 'transform', '-translate-y-full');
      } else {
        navbar.classList.remove('opacity-0', 'pointer-events-none', 'transform', '-translate-y-full');
        navbar.offsetHeight;
        navbar.classList.remove('transition-all', 'duration-300');
      }
    }
  }, [isPopupOpen]);

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
            <button
              onClick={() => {
                setActiveTab('privacy');
                setIsPopupOpen(true);
              }}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setActiveTab('terms');
                setIsPopupOpen(true);
              }}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => {
                setActiveTab('cookies');
                setIsPopupOpen(true);
              }}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </footer>
  );
};

export default Footer;