import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.webp';
import projectgrad from '../assets/projectgrad.png';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "A revolutionary XR experience that pushes the boundaries of virtual reality.",
      image: project1,
      link: "https://project1.com"
    },
    {
      id: 2,
      title: "Project Two",
      description: "An immersive game that combines stunning visuals with engaging gameplay.",
      image: project2,
      link: "https://project2.com"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A cutting-edge AR application that transforms how we interact with our environment.",
      image: project3,
      link: "https://project3.com"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id='projects' className='bg-black w-full h-full py-40 md:py-20 px-6 md:px-32'>
      <motion.h1 
        style={{ position: 'relative' }}
        whileInView={{ y: [20, 0] }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>
        Our Portfolio Arsenal
      </motion.h1>
      
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
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center p-6">
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
  );
};

export default Projects; 