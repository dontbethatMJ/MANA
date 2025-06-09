import { motion } from 'framer-motion';
import aftereffects from '../assets/AfterEffects.svg'
import androidxr from '../assets/AndroidXR.svg';
import arcore from '../assets/arcore.svg';
import blender from '../assets/Blender.svg';
import cascadeur from '../assets/Cascadeur.svg';
import davinci from '../assets/Davinci.svg';
import gcard from '../assets/Gcardboard.svg';
import meta from '../assets/Meta.svg';
import photoshop from '../assets/Photoshop.svg';
import premiere from '../assets/PremierePro.svg';
import substance from '../assets/substance3d.svg';
import unity from '../assets/Unity.svg';
import unreal from '../assets/Unreal Engine1.svg';
import vive from '../assets/Vive.svg';

const Tools: React.FC = () => {
  const getRandomColor = () => {
    const colors = [
      '#FF6B6B',
      '#4ECDC4',
      '#45B7D1',
      '#96CEB4',
      '#FFEEAD',
      '#D4A5A5',
      '#9B59B6',
      '#3498DB',
      '#E67E22',
      '#2ECC71',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const tools = [
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: aftereffects, visibleOn: "mobile" },
    { image: unity, visibleOn: "both" },
    { image: unreal, visibleOn: "both" },
    { image: meta, visibleOn: "both" },
    { image: vive, visibleOn: "desktop" },
    { image: gcard, visibleOn: "desktop" },
    { image: arcore, visibleOn: "both" },
    { image: androidxr, visibleOn: "both" },
    { image: blender, visibleOn: "both" },
    { image: vive, visibleOn: "mobile" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: photoshop, visibleOn: "mobile" },
    { image: gcard, visibleOn: "mobile" },
    { image: cascadeur, visibleOn: "both" },
    { image: substance, visibleOn: "both" },
    { image: aftereffects, visibleOn: "desktop" },
    { image: photoshop, visibleOn: "desktop" },
    { image: premiere, visibleOn: "desktop" },
    { image: davinci, visibleOn: "both" },
    { image: premiere, visibleOn: "mobile" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" }
  ];

  return (
    <section id='tools' className='w-full h-full bg-black py-8 md:py-24'>
      <motion.h1 
        style={{ position: 'relative' }}
        whileInView={{ y: [35, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>
        Spells We Use
      </motion.h1>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 top-0 h-16 md:h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-6 w-full">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-white/10 rounded-xl border-[1px] border-white/15 flex items-center justify-center overflow-hidden relative group"
              whileHover={{
                boxShadow: `0 0 35px 5px ${getRandomColor()}60`,
                transition: { duration: 0.3 }
              }}
            >
              {tool.image && (
                <img
                  src={tool.image}
                  alt={`Tool ${index + 1}`}
                  loading="lazy"
                  className={`w-3/4 h-3/4 object-contain 
                    ${
                      tool.visibleOn === "both"
                        ? "block"
                        : tool.visibleOn === "mobile"
                        ? "block md:hidden"
                        : "hidden md:block"
                    }
                  `}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 