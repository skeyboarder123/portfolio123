import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimaChildText {
  children: React.ReactNode;
  duration?: number;
  axisNum?: number;
}

const TextWrapper: React.FC<AnimaChildText> = ({
  children,
  duration = 0.5,
  axisNum = 75,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: axisNum },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default TextWrapper;
