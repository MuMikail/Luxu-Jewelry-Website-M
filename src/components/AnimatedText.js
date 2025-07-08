import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AnimatedTextContainer = styled(motion.div)`
  overflow: hidden;
`;

const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.1 
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <AnimatedTextContainer
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ 
            display: 'inline-block',
            marginRight: '0.3em'
          }}
        >
          {word}
        </motion.span>
      ))}
    </AnimatedTextContainer>
  );
};

export default AnimatedText;
