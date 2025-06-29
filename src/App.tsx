import {motion, useTransform, useScroll} from 'framer-motion';
import Lenis from 'lenis'
import { useState, useEffect } from 'react';
import bgvd from '@/assets/bgvd.mp4';
import Nav from '@/components/nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Feedback from '@/components/Feedback';
import Footer from '@/components/footer';
import ContactForm from '@/components/ContactForm';
import Stats from '@/components/Stats';

function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [hasSeenVideo, setHasSeenVideo] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [transformValue, setTransformValue] = useState('40%');
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const hasWatched = document.cookie.includes('hasWatchedIntro=true');
    if (hasWatched) {
      setIsVideoEnded(true);
    } else {
      setHasSeenVideo(false);
    }
  }, []);

  useEffect(() => {
    if (!hasSeenVideo && !isVideoEnded) {
      document.body.style.overflow = 'hidden';
    } else if (isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasSeenVideo, isVideoEnded, isContactOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTransformValue('85%');
      } else {
        setTransformValue('40%');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 2.0,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }   

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (3 * 60 * 60 * 1000));
    document.cookie = `hasWatchedIntro=true; expires=${expirationDate.toUTCString()}; path=/`;
  };

  return (
    <div 
      className="relative bg-black"
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
          x: isContactOpen ? transformValue : 0
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
      >
        <Nav isVideoEnded={isVideoEnded} onContactClick={() => setIsContactOpen(true)}/>
        
        <Hero isVideoEnded={isVideoEnded} onContactClick={() => setIsContactOpen(true)}/>

        <About/>

        <Stats/>

        <Services/>

        <Tools/>

        <Projects/>

        <Feedback />

        <Footer onContactClick={(email: string) => {
          setContactEmail(email);
          setIsContactOpen(true);
        }}/>
      </motion.div>

      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        initialEmail={contactEmail}
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