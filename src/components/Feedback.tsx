import { motion } from 'framer-motion';
import sarah from '../assets/sarahchen.jpg';
import alex from '../assets/alexjohnson.jpg';
import maria from '../assets/mariagarcia.jpg';

const Feedback: React.FC = () => {
  return (
    <section id='feedback' className='bg-black w-full min-h-dvh py-28 md:py-24 px-12 md:px-32 relative'>
      <motion.h1 
        style={{ position: 'relative' }}
        whileInView={{ y: [35, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center mb-8 md:mb-16'>
        Our Happy Clients
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 px-4 mb-12 lg:mb-16">

        <motion.div 
        style={{ position: 'relative' }}
        whileInView={{ y: [25, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="w-full lg:w-1/2 max-w-xl relative lg:top-8">
          <div className='absolute -top-8 lg:-top-12 -left-8 lg:-left-12 z-10'>
            <img 
              src={sarah}  
              alt="Sarah Chen" 
              className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
            />
          </div>
          <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-white text-base lg:text-lg font-bold ">
                  Sarah Chen<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, Head of Innovation</span>
                </h3>
                <div className="flex gap-1 ml-auto text-sm lg:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-justify">
                Mana House delivered an exceptional VR experience for our product launch. The attention to detail and immersive quality were outstanding.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
        style={{ position: 'relative' }}
        whileInView={{ y: [25, 0] }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
        className="w-full lg:w-1/2 max-w-xl relative lg:-top-8">
          <div className='absolute -top-8 -left-8 z-10 lg:hidden'>
            <img 
              src={alex}  
              alt="Alex Johnson" 
              className='w-16 h-16 rounded-2xl object-cover' 
            />
          </div>
          <div className='absolute -bottom-12 -left-12 z-10 hidden lg:block'>
            <img 
              src={alex}  
              alt="Alex Johnson" 
              className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
            />
          </div>
          <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-white text-base lg:text-lg font-bold ">
                  Alex Johnson<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, CTO</span>
                </h3>
                <div className="flex gap-1 ml-auto text-sm lg:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-justify">
                The VR solutions provided by Mana House transformed our training programs. The level of engagement we've seen from our employees is unprecedented.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center px-4 lg:pt-12">
        <motion.div 
        style={{ position: 'relative' }}
        whileInView={{ y: [25, 0] }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
        className="w-full max-w-xl relative lg:left-16">
          <div className='absolute -top-8 lg:-top-12 -left-8 lg:-left-12 z-10'>
            <img 
              src={maria}  
              alt="Maria Garcia" 
              className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
            />
          </div>
          <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-white text-base lg:text-lg font-bold ">
                  Maria Garcia<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, CEO</span>
                </h3>
                <div className="flex gap-1 ml-auto text-sm lg:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-justify">
                Working with Mana House was a game-changer for our brand. Their immersive experiences helped us connect with our audience in ways we never thought possible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
