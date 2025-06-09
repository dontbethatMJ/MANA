import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats: React.FC = () => {
  const stats = [
    { value: 2, label: "Years Experience" },
    { value: 5, label: "Clients Worldwide" },
    { value: 10, label: "Projects Completed" },
    { value: 100, label: "Client Satisfaction" }
  ];

  return (
    <section id="stats" className="w-full">
      <div className="w-[95%] max-w-[80rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl px-6 aspect-[4/3] flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <Counter end={stat.value} />
                {stat.label === "Client Satisfaction" ? "%" : "+"}
              </div>
              <div className="text-sm md:text-base text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 