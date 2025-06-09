import { motion } from 'framer-motion';
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import xr from '../assets/xrdevelopment.webp';
import gameAnimation from '../assets/gameanimation.webp';
import gameArt from '../assets/gameart.webp';
import productVisualization from '../assets/productvisualization.webp';

interface Service {
  title: string;
  image: string;
  description: string;
} 

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "XR Development",
      image: xr,
      description: "XR Development"
    },
    {
      title: "Game Animation",
      image: gameAnimation,
      description: "Game Animation"
    },
    {
      title: "Game Art",
      image: gameArt,
      description: "Game Art"
    },
    {
      title: "Product Visualization",
      image: productVisualization,
      description: "Product Visualization"
    }
  ];

  return (
    <section id='services' className='w-full h-dvh flex items-center justify-center px-6 md:px-32 relative bg-black overflow-hidden'>
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
          className='text-white p-4 text-4xl md:text-6xl iceland text-center'>
          What we offer
        </motion.h1>
        
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto text-white">
              <TiltedCard
                imageSrc={service.image}
                altText={service.title}
                captionText={service.title}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
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