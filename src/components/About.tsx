import { motion } from 'framer-motion';
import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import Counter from './Counter';

const About = () => {
  return (
    <section id='about' className='w-full h-full bg-black py-20 px-4 md:px-32'>
      <motion.h1 
        style={{ position: 'relative' }}
        whileInView={{ y: [20, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='text-white p-4 text-2xl md:text-3xl iceland'>
        <span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> Why Us
      </motion.h1>
      <motion.div className='bg-[#181818] w-full h-full rounded-3xl p-8 md:p-16 border-[1px] border-[#ffffff1a] relative overflow-hidden'>
        <div className="absolute -top-32 -left-32 w-64 md:w-80 h-80 rounded-full bg-gradient-to-br from-[#DE5068] to-[#1313db] opacity-25 blur-3xl pointer-events-none" />
        <div className="relative">
          <h1 className='text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4'>WE ARE BUILT DIFFERENT</h1>
          <p className='text-[0.75rem] md:text-lg text-white/80 leading-relaxed md:text-justify'>
          We're not just another digital agency — we're worldbuilders. At MANA House, we design immersive XR, cinematic trailers, and game-ready visuals with one mission: to make your ideas feel alive. With a sharp eye for interaction, detail, and flow, we help studios, startups, and storytellers turn vision into impact. <br/><br/> Whether it's VR mechanics, lighting a scene, or animating a world — we do it with intent, not just aesthetics. <br/><br/> Because here, immersion isn’t a feature — it’s the foundation.<br/>
            <a href='#projects' className='underline'>Check out our work</a>
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 mt-4 justify-center"
          >
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaDiscord size={24} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaYoutube size={24} />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-between mt-8 md:mt-12 text-white max-w-3xl mx-auto"
          >
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold"
              >
                <Counter end={2} />+
              </motion.h2>
              <p className="text-sm md:text-base opacity-80">Years of<br/> Experience</p>
            </div>
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold"
              >
                <Counter end={5} />+
              </motion.h2>
              <p className="text-sm md:text-base opacity-80">Clients</p>
            </div>
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold"
              >
                <Counter end={10} />+
              </motion.h2>
              <p className="text-sm md:text-base opacity-80">Projects</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 