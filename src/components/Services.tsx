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
      title: "Game Animation",
      image: test,
      description: "Game Animation"
    },
    {
      title: "Game Art",
      image: test,
      description: "Game Art"
    },
    {
      title: "Product Visualization",
      image: test,
      description: "Product Visualization"
    }
  ];

  return (
    <section id='services' className='w-full h-dvh flex items-center justify-center px-6 md:px-32 relative'>
      <div className="w-full max-w-[1400px] relative z-10">
        <motion.h1 
          style={{ position: 'relative' }}
          whileInView={{ y: [20, 0] }}
          transition={{ type: 'spring', stiffness: 50 }}
          className='text-white p-4 text-4xl md:text-6xl iceland text-center'>
          What we offer
        </motion.h1>
        
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
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
      </div>
    </section>
  );
};

export default Services; 