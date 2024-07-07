import React from 'react';

import { useScroll, motion, useTransform } from 'framer-motion';

interface AnimaChildHeader {
  children: React.ReactNode;
}

const AnimaHeader: React.FC<AnimaChildHeader> = ({ children }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.9]);
  const backdropFilter = useTransform(
    scrollY,
    [0, 400],
    ['blur(0px)', 'blur(5px)']
  );
  return (
    <motion.div style={{ opacity, backdropFilter }}>{children}</motion.div>
  );
};

export default AnimaHeader;
