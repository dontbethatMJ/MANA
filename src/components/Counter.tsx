import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  end: number;
}

const Counter = ({ end }: CounterProps) => {
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
};

export default Counter; 