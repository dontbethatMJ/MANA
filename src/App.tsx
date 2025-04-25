import {motion, useMotionValue, useTransform, animate} from 'framer-motion';
import Nav from './components/nav';
// import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
import test from './assets/test.jpg';
import test2 from './assets/test2.webp';
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';

function Counter({ end }: { end: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      onViewportEnter={() => {
        count.set(0);
        animate(count, end, { duration: 1.5 });
      }}
    >
      {rounded}
    </motion.span>
  );
}


function App() {

  return (
    <>
    <Nav/>
    {/* <SplashCursor /> */}
    <section id='home' className="w-full h-dvh bg-gradient-to-b from-[#2c2c6d] to-black flex flex-col items-center justify-center fira">
      <div className='h-24'></div>
      <div className="flex justify-between items-center px-8 w-2/3">
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">M</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">A</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">N</div>
        <div className="text-[3rem] md:text-[9rem] font-bold text-white iceland">A</div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-xl md:text-5xl font-bold text-white iceland tracking-widest -mt-4 md:-mt-12">
          HOUSE
        </h2>
        <h3 className='text-sm md:text-xl text-white font-light'>Beyond Reality, Beyond Imagination</h3>
        <a href='#services'><button className="px-8 py-2 md:px-12 md:py-3 text-black text-sm md:text-lg rounded-full bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          Our Services
        </button></a>
      </div>
    </section>

    <section id='about' className='w-full h-full bg-black py-20 px-4 md:px-32 fira'>
      <h1 className='text-white p-4 text-2xl md:text-3xl iceland'><span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> Why Us</h1>
      <div 
        className='bg-[#181818] w-full h-full rounded-3xl p-8 md:p-16 border-[1px] border-[#ffffff1a] relative overflow-hidden'
      >
        <div className="absolute -top-32 -left-32 w-64 md:w-80 h-80 rounded-full bg-gradient-to-br from-[#DE5068] to-[#1313db] opacity-25 blur-3xl pointer-events-none" />
        <div className="relative">
          <h1 className='text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4'>BUILT DIFFERENT</h1>
          <p className='text-[0.75rem] md:text-lg text-white/80 leading-relaxed md:text-justify'>
            While others chase trends, we focus on what actually works – immersive XR, unforgettable games, and 3D worlds built with precision. Our team of wizards <span className='italic'>(yes, we call them that)</span> thrives on innovation, precision, and a touch of magic—delivering not just projects, but unforgettable digital experiences. No empty promises, just exceptional craft and honest collaboration. <br/><br/> The secret? We care about the <span className='font-bold italic'>how</span> as much as the <span className='font-bold italic'>wow</span>. <br/> <a href='#projects' className='underline'>Check out our work</a>
          </p>
          
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
      </div>
    </section>

    <section id='services' className='w-full h-full bg-black py-28 md:py-[4.5rem] px-6 md:px-32'>
      <h1 className='text-white p-4 text-2xl md:text-3xl iceland'><span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> What we offer</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
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
      </div>
    </section>

    <section id='tools' className='w-full h-full bg-black py-8 md:py-24'>
      <h1 className='text-white p-4 text-4xl md:text-6xl iceland px-6 md:px-32 text-center'>Tools We Use</h1>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 top-0 h-16 md:h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-6 w-full">
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"><img src={test2} className='aspect-square p-2 md:p-4'></img></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
          <motion.div whileHover={{ scale: 0.9 }} className="aspect-square bg-[#181818] rounded-xl border-[1px] border-[#ffffff1a]"></motion.div>
        </div>
      </div>
    </section>

    <section id='projects' className='bg-black w-full h-dvh py-24 md:py-[4.5rem] px-6 md:px-32'>
      <h1 className='text-white p-4 text-2xl md:text-3xl iceland'><span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> Our Works</h1>
      <div className='border-2 w-full h-full'>

      </div>
    </section>

    <section id='testimonials' className='bg-black w-full h-dvh py-28 md:py-[4.5rem] px-6 md:px-32'>
      <h1 className='text-white p-4 text-2xl md:text-3xl iceland'><span className='text-[#3c3cdd]'>&gt;&gt;&gt;</span> Our Happy Clients</h1>

    </section>
    </>
  )
}

export default App