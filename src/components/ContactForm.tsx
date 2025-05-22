import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

const ContactForm = ({ isOpen, onClose, initialEmail = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: initialEmail,
    subject: '',
    content: ''
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialEmail) {
      setFormData(prev => ({
        ...prev,
        email: initialEmail
      }));
    }
  }, [initialEmail]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('...');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.content);
    formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult('Thank You for contacting us! We will get back to you as soon as possible.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          content: ''
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setResult('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
            className="fixed left-0 top-0 h-full w-[60%] md:w-[40%] bg-transparent z-50 p-2 md:p-4 overflow-y-auto"
          >
            <div className="bg-[#181818]/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-[#ffffff1a] h-full">
              <div className="flex justify-between items-center mb-8 md:mb-12">
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
                <input type="hidden" name="from_name" value="Mana House Contact"/>

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
                    Purpose of Contact
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
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2 md:py-3 bg-[#3c3cdd] text-white rounded-lg transition-colors text-sm md:text-base ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2b2ba8]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {result && (
                  <div className={`text-sm text-center ${
                    result.includes('successfully') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {result}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm; 