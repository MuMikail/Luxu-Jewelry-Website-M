import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransitionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TransitionContent = styled(motion.div)`
  text-align: center;
  color: #fff;
`;

const TransitionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Playfair Display', serif;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 20px;
`;



const PageTransition = ({ children, pageName }) => {
  return (
    <>
      <TransitionOverlay
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        exit={{ x: '0%' }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        }}
      >
        <TransitionContent>
          <TransitionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {pageName}
          </TransitionTitle>

        </TransitionContent>
      </TransitionOverlay>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.4,
          ease: [0.76, 0, 0.24, 1] 
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
