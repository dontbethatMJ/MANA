import {motion, useMotionValue, useTransform, animate, useScroll, useDragControls} from 'framer-motion';
import { useState, useEffect } from 'react';
import bgvd from './assets/bgvd.mp4';
import bgimg from './assets/bgimg.png';
import Nav from './components/nav';
import test from './assets/test.jpg';
import aftereffects from './assets/AfterEffects.svg';
import androidxr from './assets/AndroidXR.svg';
import arcore from './assets/arcore.svg';
import blender from './assets/Blender.svg';
import cascadeur from './assets/Cascadeur.svg';
import davinci from './assets/Davinci.svg';
import gcard from './assets/Gcardboard.svg';
import meta from './assets/Meta.svg';
import photoshop from './assets/Photoshop.svg';
import premiere from './assets/PremierePro.svg';
import substance from './assets/substance3d.svg';
import unity from './assets/Unity.svg';
import unreal from './assets/Unreal Engine1.svg';
import vive from './assets/Vive.svg'; 
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import { FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ContactForm from './components/ContactForm';
import projectest from './assets/projectest.png';
import projectgrad from './assets/projectgrad.png';
import Footer from './components/footer.tsx';

// Add project interface and list
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A revolutionary XR experience that pushes the boundaries of virtual reality.",
    image: projectest,
    link: "https://project1.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "An immersive game that combines stunning visuals with engaging gameplay.",
    image: projectest,
    link: "https://project2.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A cutting-edge AR application that transforms how we interact with our environment.",
    image: projectest,
    link: "https://project3.com"
  },
  // Add more projects as needed
];

function Counter({ end }: { end: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      onViewportEnter={() => {
        animate(count, end, { duration: 1.5 });
      }}
    >
      {rounded}
    </motion.span>
  );
}

function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [hasSeenVideo, setHasSeenVideo] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dragControls = useDragControls();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset the end touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    
    if (isLeftSwipe) {
      setIsContactOpen(true);
    }
  };

  useEffect(() => {
    const hasWatched = localStorage.getItem('hasWatchedIntro');
    if (!hasWatched) {
      setHasSeenVideo(false);
    } else {
      setIsVideoEnded(true);
    }
  }, []);

  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactOpen]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    localStorage.setItem('hasWatchedIntro', 'true');
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
    { image: unreal, visibleOn: "mobile" },
    { image: aftereffects, visibleOn: "both" },
    { image: androidxr, visibleOn: "both" },
    { image: arcore, visibleOn: "both" },
    { image: unreal, visibleOn: "desktop" },
    { image: vive, visibleOn: "desktop" },
    { image: blender, visibleOn: "both" },
    { image: cascadeur, visibleOn: "both" },
    { image: davinci, visibleOn: "both" },
    { image: vive, visibleOn: "mobile" },
    { image: null, visibleOn: "both" },
    { image: null, visibleOn: "both" },
    { image: photoshop, visibleOn: "mobile" },
    { image: gcard, visibleOn: "mobile" },
    { image: meta, visibleOn: "both" },
    { image: unity, visibleOn: "both" },
    { image: gcard, visibleOn: "desktop" },
    { image: photoshop, visibleOn: "desktop" },
    { image: premiere, visibleOn: "desktop" },
    { image: substance, visibleOn: "both" },
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div 
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {!hasSeenVideo && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoEnded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black pointer-events-none"
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          >
            <source src={bgvd} type="video/mp4" />
          </video>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVideoEnded ? 1 : 0,
          x: isContactOpen ? '40%' : 0
        }}
        transition={{ 
          duration: 1.5,
          x: {
            type: "spring",
            damping: 25,
            stiffness: 200
          }
        }}
        className="scrollbar-hide"
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            setIsContactOpen(true);
          }
        }}
      >
        <Nav isVideoEnded={isVideoEnded} onContactClick={() => setIsContactOpen(true)}/>
        <section id='home' className="w-full h-dvh relative flex flex-col items-center justify-center  overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img 
              src={bgimg} 
              alt="background" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 z-10"></div>
          <div className='h-24 relative z-20'></div>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isVideoEnded ? 0 : 100, opacity: isVideoEnded ? 1 : 0 }}
            transition={{ 
              delay: isVideoEnded ? 0.2 : 0,
              duration: 1.5,
              type: "spring",
              stiffness: 100
            }}
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
              transition={{ 
                delay: isVideoEnded ? 0.4 : 0,
                duration: 1.5,
                type: "spring",
                stiffness: 100
              }}
              className="text-xl md:text-5xl font-bold text-white iceland tracking-widest -mt-4 md:-mt-12"
            >
              HOUSE
            </motion.h2>
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: isVideoEnded ? 0 : 100, opacity: isVideoEnded ? 1 : 0 }}
              transition={{ 
                delay: isVideoEnded ? 0.6 : 0,
                duration: 1.5,
                type: "spring",
                stiffness: 100
              }}
              className='text-sm md:text-xl text-white font-light'
            >
              Beyond Reality, Beyond Imagination
            </motion.h3>
            <motion.a 
              href='#services'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoEnded ? 1 : 0 }}
                transition={{ 
                  delay: isVideoEnded ? 0.8 : 0,
                  duration: 0.5
                }}
                className="px-8 py-2 md:px-12 md:py-3 text-black text-sm md:text-lg rounded-full bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              >
                Our Services
              </motion.button>
            </motion.a>
          </div>
        </section>

        <section id='about' className='w-full h-full bg-black py-20 px-4 md:px-32'>
          <motion.h1 
            style={{ position: 'relative' }}
            whileInView={{ y: [20, 0] }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='text-white p-4 text-2xl md:text-3xl iceland'><span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> Why Us</motion.h1>
          <motion.div className='bg-[#181818] w-full h-full rounded-3xl p-8 md:p-16 border-[1px] border-[#ffffff1a] relative overflow-hidden'>
            <div className="absolute -top-32 -left-32 w-64 md:w-80 h-80 rounded-full bg-gradient-to-br from-[#DE5068] to-[#1313db] opacity-25 blur-3xl pointer-events-none" />
            <div className="relative">
              <h1 className='text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 '>WE ARE BUILT DIFFERENT</h1>
              <p className='text-[0.75rem] md:text-lg text-white/80 leading-relaxed md:text-justify '>
                While others chase trends, we focus on what actually works – immersive XR, unforgettable games, and 3D worlds built with precision. Our team of wizards <span className='italic'>(yes, we call them that)</span> thrives on innovation, precision, and a touch of magic—delivering not just projects, but unforgettable digital experiences. No empty promises, just exceptional craft and honest collaboration. <br/><br/> The secret? We care about the <span className='font-bold italic'>how</span> as much as the <span className='font-bold italic'>wow</span>. <br/> <a href='#projects' className='underline '>Check out our work</a>
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
                    <Counter end={100} />+
                  </motion.h2>
                  <p className="text-sm md:text-base opacity-80">Projects</p>
                </div>
                <div className="text-center">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold"
                  >
                    <Counter end={100} />+
                  </motion.h2>
                  <p className="text-sm md:text-base opacity-80">Users</p>
                </div>
                <div className="text-center">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold"
                  >
                    <Counter end={50} />+
                  </motion.h2>
                  <p className="text-sm md:text-base opacity-80">Likes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id='services' className='w-full h-full bg-black py-28 md:py-[4.5rem] px-6 md:px-32'>
        <motion.h1 
            style={{ position: 'relative' }}
            whileInView={{ y: [20, 0] }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>Our Services</motion.h1>
          
          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="XR Development"
                captionText="XR Development"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="XR Development"
              />
            </div>

            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="Game Dev"
                captionText="Game Dev"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="Game Dev"
              />
            </div>

            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="Cinematics"
                captionText="Cinematics"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="Cinematics"
              />
            </div>

            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="Level Designing"
                captionText="Level Designing"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="Level Designing"
              />
            </div>

            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="3D Modelling"
                captionText="3D Modelling"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="3D Modelling"
              />
            </div>

            <div className="w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              <TiltedCard
                imageSrc={test}
                altText="3D Product Visualization"
                captionText="3D Product Visualization"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent="3D Product Visualization"
              />
            </div>
          </motion.div>
        </section>

        <section id='tools' className='w-full h-full bg-black py-8 md:py-24'>
          <motion.h1 
            style={{ position: 'relative' }}
            whileInView={{ y: [20, 0] }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>Tools We Use</motion.h1>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div className="absolute inset-x-0 top-0 h-16 md:h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-6 w-full">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a] flex items-center justify-center overflow-hidden relative group"
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

        <section id='projects' className='bg-black w-full h-full py-40 md:py-20 px-6 md:px-32'>
        <motion.h1 
            style={{ position: 'relative' }}
            whileInView={{ y: [20, 0] }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>Projects</motion.h1>
          
          <div className='w-full h-[calc(100%-8rem)] flex items-center justify-center relative'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="absolute left-0 z-10 text-red-500/80 hover:text-red-500 transition-colors"
            >
              <IoIosArrowBack size={40} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="absolute right-0 z-10 text-red-500/80 hover:text-red-500 transition-colors"
            >
              <IoIosArrowForward size={40} />
            </motion.button>

            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl aspect-[4/3] relative group"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <motion.img
                  src={projectgrad}
                  alt="gradient overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-around p-6 ">
                  <h3 className="text-sm md:text-xl font-bold text-black">
                    {projects[currentProject].title}
                  </h3>
                  <motion.a
                    href={projects[currentProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-black text-white px-6 py-2 rounded-full text-[0.6rem] md:text-sm font-medium hover:bg-opacity-90 transition-colors"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id='testimonials' className='bg-black w-full min-h-dvh py-28 md:py-24 px-12 md:px-32 relative'>
          <motion.h1 
            style={{ position: 'relative' }}
            whileInView={{ y: [20, 0] }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center mb-8 md:mb-16'>Our Happy Clients</motion.h1>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 px-4 mb-12 lg:mb-16">

            <div className="w-full lg:w-1/2 max-w-xl relative lg:top-8">
              <div className='absolute -top-8 lg:-top-12 -left-8 lg:-left-12 z-10'>
                <img 
                  src={test}  
                  alt="Sarah Chen" 
                  className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
                />
              </div>
              <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-white text-base lg:text-lg font-bold ">Sarah Chen<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, Head of Innovation</span></h3>
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
            </div>

            <div className="w-full lg:w-1/2 max-w-xl relative lg:-top-8">
              <div className='absolute -top-8 -left-8 z-10 lg:hidden'>
                <img 
                  src={test}  
                  alt="Sarah Chen" 
                  className='w-16 h-16 rounded-2xl object-cover' 
                />
              </div>
              <div className='absolute -bottom-12 -left-12 z-10 hidden lg:block'>
                <img 
                  src={test}  
                  alt="Sarah Chen" 
                  className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
                />
              </div>
              <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-white text-base lg:text-lg font-bold ">Alex Johnson<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, CTO</span></h3>
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
            </div>
          </div>

          <div className="flex justify-center px-4 lg:pt-12">
            <div className="w-full max-w-xl relative lg:left-16">
              <div className='absolute -top-8 lg:-top-12 -left-8 lg:-left-12 z-10'>
                <img 
                  src={test}  
                  alt="Maria Garcia" 
                  className='w-16 lg:w-20 h-16 lg:h-20 rounded-2xl object-cover' 
                />
              </div>
              <div className="bg-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full z-20 relative backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-white text-base lg:text-lg font-bold ">Maria Garcia<span className="text-white/80 text-[0.7rem] lg:text-sm font-normal">, CEO</span></h3>
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
            </div>
          </div>
        </section>
        <Footer/>
      </motion.div>

      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <motion.div 
        className="fixed bottom-8 right-8 z-50 w-12 h-12"
        style={{ opacity: isVideoEnded ? 1 : 0 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#ffffff1a"
            strokeWidth="7"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#D52447"
            strokeWidth="7"
            strokeLinecap="round"
            style={{
              pathLength,
              rotate: -90,
              transformOrigin: "50% 50%"
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default App