import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { useRef } from 'react';

const Word = ({ children, progress, range }: { 
  children: React.ReactNode; 
  progress: any; 
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <motion.span
        style={{ opacity: opacity }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

const About: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const text = "Why MANA HOUSE?";
  const words = text.split(" ");

  const contentOpacity1 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const contentY1 = useTransform(scrollYProgress, [0.4, 0.5], [40, 0]);
  
  const contentOpacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const contentY2 = useTransform(scrollYProgress, [0.5, 0.6], [40, 0]);
  
  const contentOpacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const contentY3 = useTransform(scrollYProgress, [0.6, 0.7], [40, 0]);
  
  const contentOpacity4 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const contentY4 = useTransform(scrollYProgress, [0.7, 0.8], [40, 0]);

  return (
    <section id='about' className='w-full bg-black min-h-screen'>
      <div ref={targetRef} className="relative z-0 h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-[95%] max-w-[48rem] mx-auto pt-20">
            <div className="relative mb-12">
              <span className="flex flex-wrap justify-center text-3xl md:text-5xl lg:text-6xl font-bold text-white/30 font-almarena">
                {words.map((word, i) => (
                  <span key={`preview-${i}`} className="mx-1 lg:mx-1.5 font-medium">
                    {word}
                  </span>
                ))}
              </span>
              <span className="absolute top-0 left-0 right-0 flex flex-wrap justify-center text-3xl md:text-5xl lg:text-6xl font-bold font-almarena">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <Word 
                      key={i} 
                      progress={scrollYProgress} 
                      range={[start, end]}
                    >
                      {word}
                    </Word>
                  );
                })}
              </span>
            </div>

            <div className="max-w-3xl mx-auto md:mx-0">
              <div className="space-y-6">
                <motion.p 
                  style={{ 
                    opacity: contentOpacity1,
                    y: contentY1
                  }}
                  className='text-lg md:text-xl text-white/80 leading-relaxed md:leading-loose text-justify'
                >
                  We're not just another digital agency — we're worldbuilders. At MANA House, we design immersive XR, cinematic trailers, and game-ready visuals with one mission: to make your ideas feel alive.
                </motion.p>
                <motion.p 
                  style={{ 
                    opacity: contentOpacity2,
                    y: contentY2
                  }}
                  className='text-lg md:text-xl text-white/80 leading-relaxed md:leading-loose text-justify'
                >
                  Whether it's VR mechanics, lighting a scene, or animating a world — we do it with intent, not just aesthetics.
                </motion.p>
                <motion.p 
                  style={{ 
                    opacity: contentOpacity3,
                    y: contentY3
                  }}
                  className='text-lg md:text-xl text-white/80 leading-relaxed md:leading-loose text-justify'
                >
                  Because here, immersion isn't a feature — it's the foundation.
                </motion.p>
              </div>

              <div className="mt-12 space-y-12">
                <div className="flex justify-center">
                  <motion.a 
                    href='#projects' 
                    style={{ 
                      opacity: contentOpacity4,
                      y: contentY4
                    }}
                    className='text-accent1 hover:text-accent1/80 transition-colors text-xl md:text-2xl font-medium border-b-2 border-accent1 hover:border-accent1/80 pb-1'
                  >
                    Check out our work
                  </motion.a>
                </div>

                <motion.div 
                  style={{ 
                    opacity: contentOpacity4,
                    y: contentY4
                  }}
                  className="flex gap-6 md:gap-8 justify-center"
                >
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://discord.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <FaDiscord size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <FaTwitter size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <FaYoutube size={24} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 