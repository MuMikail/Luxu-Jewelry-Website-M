import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
`;

const ParallaxLayer = styled(motion.div)`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`;

const ContentOverlay = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  padding: 60px 40px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  max-width: 800px;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    margin: 0 20px;
  }
`;

const ParallaxTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 6px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`;

const ParallaxText = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <ParallaxContainer ref={containerRef}>
      <ParallaxLayer style={{ y: backgroundY }} />
      
      <ContentOverlay
        style={{ 
          opacity,
          scale,
          y: contentY
        }}
      >
        <ParallaxTitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          CRAFTED WITH PASSION
        </ParallaxTitle>
        
        <ParallaxText
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Each piece in our collection tells a story of meticulous craftsmanship, 
          premium materials, and timeless design that transcends generations.
        </ParallaxText>
      </ContentOverlay>
    </ParallaxContainer>
  );
};

export default ParallaxSection;
