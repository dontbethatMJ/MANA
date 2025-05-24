import { motion } from 'framer-motion';
import bgimg from '../assets/bgimg.svg';

interface HeroProps {
  isVideoEnded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVideoEnded }) => {
  return (
    <section id='home' className="w-full h-dvh relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={bgimg} alt="background" className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="absolute inset-0 z-10"></div>
      <div className='h-24 relative z-20'></div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVideoEnded ? 0 : 100, opacity: isVideoEnded ? 1 : 0 }}
        transition={{ delay: isVideoEnded ? 0.2 : 0, duration: 1.5, type: "spring", stiffness: 100 }}
        className="flex justify-between items-center px-8 w-2/3 relative z-20"
      >
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">M</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">A</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">N</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">A</div>
      </motion.div>

      <div className="flex flex-col items-center space-y-8 relative z-20">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isVideoEnded ? 0 : 100, opacity: isVideoEnded ? 1 : 0 }}
          transition={{ delay: isVideoEnded ? 0.4 : 0, duration: 1.5, type: "spring", stiffness: 100 }}
          className="text-xl md:text-5xl font-bold text-white iceland tracking-widest -mt-4 md:-mt-12"
        >
          HOUSE
        </motion.h2>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isVideoEnded ? 0 : 100, opacity: isVideoEnded ? 1 : 0 }}
          transition={{ delay: isVideoEnded ? 0.6 : 0, duration: 1.5, type: "spring", stiffness: 100 }}
          className='text-sm md:text-xl text-white font-light'
        >
          Crafting Immersion Beyond Reality
        </motion.h3>
        <motion.a 
          href='#services'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoEnded ? 1 : 0 }}
            transition={{ delay: isVideoEnded ? 0.8 : 0, duration: 0.5 }}
            className="px-8 py-2 md:px-12 md:py-3 text-black text-sm md:text-lg rounded-full bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          >
            Our Services
          </motion.button>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 