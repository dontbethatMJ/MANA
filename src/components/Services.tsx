import { motion } from 'framer-motion';
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import xr from '../assets/xrdev.mp4';
import xr2 from '../assets/xrdev2.mp4';
import gameAnimation from '../assets/gameanim.mp4';
import gameAnimation2 from '../assets/gameanim2.mp4';
import gameArt from '../assets/gameart.mp4';
import gameArt2 from '../assets/gameart2.mp4';

interface Service {
  title: string;
  video: string;
  video2: string;
  description: string;
  subtitle: string;
} 

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "XR Development",
      video: xr,
      video2: xr2,
      description: "XR Development",
      subtitle: "VR/MR Immersive Experiences & Simulations"
    },
    {
      title: "Game Animation",
      video: gameAnimation,
      video2: gameAnimation2,
      description: "Game Animation",
      subtitle: "Animation Cinematics & Game Teasers"
    },
    {
      title: "Game Art",
      video: gameArt,
      video2: gameArt2,
      description: "Game Art",
      subtitle: "Digital Twins & Environment Art"
    }
  ];

  return (
    <section id='services' className='w-full h-fit md:h-dvh flex items-center justify-center px-6 md:px-32 relative bg-black overflow-hidden'>
      <motion.div
        animate={{
          x: ["-40vw", "0vw", "-40vw"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute h-full w-[60vw] md:w-[30vw] bg-white opacity-[0.03] z-10"
      />

      <motion.div
        animate={{
          x: ["40vw", "0vw", "40vw"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute h-full w-[60vw] md:w-[30vw] bg-white opacity-[0.03] z-10"
      />

      <motion.div
        animate={{
          x: ["-20vw", "20vw", "-20vw"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute h-full w-[60vw] md:w-[30vw] bg-white opacity-[0.01] z-10"
      />

      <motion.div
        animate={{
          x: ["-40vw", "-20vw", "-40vw"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute h-full w-[60vw] md:w-[30vw] bg-white opacity-[0.01] z-10"
      />

      <motion.div
        animate={{
          x: ["40vw", "20vw", "40vw"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute h-full w-[60vw] md:w-[30vw] bg-white opacity-[0.01] z-10"
      />

      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black to-transparent z-20" />
      
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black to-transparent z-20" />

      <div className="w-full max-w-[1400px] relative z-30">
        <motion.h1 
          style={{ position: 'relative' }}
          whileInView={{ y: [35, 0] }}
          transition={{ type: 'spring', stiffness: 50 }}
          className='text-white p-4 text-4xl md:text-6xl iceland text-center mt-6'>
          What we offer
        </motion.h1>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-12 place-items-center">
          {services.map((service, index) => (
            <div key={index} className="w-full aspect-square max-w-[300px] md:max-w-[380px] mx-auto text-white flex items-center justify-center">
              <TiltedCard
                videoSrc={service.video}
                fallbackVideoSrc={service.video2}
                altText={service.title}
                captionText={service.title}
                subtitle={service.subtitle}
                containerHeight="100%"
                containerWidth="100%"
                videoHeight="100%"
                videoWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={service.description}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 