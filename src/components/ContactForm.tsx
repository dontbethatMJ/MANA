import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          <motion.div
            ref={formRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-[60%] md:w-[40%] bg-[#181818] border-r border-[#ffffff1a] z-50 p-4 md:p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl text-white iceland">Contact Us</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/80 mb-1 md:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg text-white focus:outline-none focus:border-[#3c3cdd] transition-colors text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/80 mb-1 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg text-white focus:outline-none focus:border-[#3c3cdd] transition-colors text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-white/80 mb-1 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg text-white focus:outline-none focus:border-[#3c3cdd] transition-colors text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm text-white/80 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg text-white focus:outline-none focus:border-[#3c3cdd] transition-colors resize-none text-sm md:text-base"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 md:py-3 bg-[#3c3cdd] text-white rounded-lg hover:bg-[#2b2ba8] transition-colors text-sm md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm; 