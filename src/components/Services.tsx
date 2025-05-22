import { motion } from 'framer-motion';
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import test from '../assets/test.jpg';

const Services = () => {
  const services = [
    {
      title: "XR Development",
      image: test,
      description: "XR Development"
    },
    {
      title: "Game Dev",
      image: test,
      description: "Game Dev"
    },
    {
      title: "Cinematics",
      image: test,
      description: "Cinematics"
    },
    {
      title: "Level Designing",
      image: test,
      description: "Level Designing"
    },
    {
      title: "3D Modelling",
      image: test,
      description: "3D Modelling"
    },
    {
      title: "3D Product Visualization",
      image: test,
      description: "3D Product Visualization"
    }
  ];

  return (
    <section id='services' className='w-full h-full bg-black py-28 md:py-[4.5rem] px-6 md:px-32'>
      <motion.h1 
        style={{ position: 'relative' }}
        whileInView={{ y: [20, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>
        Our Services
      </motion.h1>
      
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
        {services.map((service, index) => (
          <div key={index} className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
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
    </section>
  );
};

export default Services; 