import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PolicyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const PolicyPanel: React.FC<PolicyPanelProps> = ({ isOpen, onClose, title, content }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
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
            ref={panelRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[50%] md:w-[40%] bg-transparent z-50 p-2 md:p-4 overflow-hidden"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
              <div className='w-32 md:w-40 h-32 md:h-40 absolute bg-black left-0 top-0 rounded-tl-3xl trin'></div>
              <div className='w-28 md:w-36 h-28 md:h-36 absolute bg-white/10 left-0 top-0 rounded-tl-3xl trin'></div>
              <div className="flex justify-between items-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-3xl text-white iceland">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors z-50"
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

              <div className="text-white/80 space-y-4 md:space-y-6 text-sm md:text-base">
                {content}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyPanel; 