import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #000;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url('https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
  }
`;

const ContentContainer = styled(motion.div)`
  text-align: center;
  z-index: 10;
  position: relative;
  max-width: 900px;
  padding: 0 20px;
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 100;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  letter-spacing: 12px;
  line-height: 0.9;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 5rem);
    letter-spacing: 6px;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: clamp(1.3rem, 3.5vw, 2.2rem);
  font-weight: 200;
  color: #ffd700;
  margin-bottom: 40px;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    letter-spacing: 3px;
    margin-bottom: 30px;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 50px;
  letter-spacing: 1.5px;
  line-height: 1.8;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const CTAButton = styled(motion.button)`
  padding: 25px 15px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  color: #000;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 250px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 1rem;
    letter-spacing: 2px;
    min-width: 200px;
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid #D4AF37;
  
  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: #D4AF37;
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.2);
  }
`;


const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 43.3%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  letter-spacing: 2px;
  z-index: 10;
  
  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, #ffd700, transparent);
    margin-top: 15px;
    animation: pulse 2.5s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }
`;

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  // Enhanced animation variants dengan stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <HeroContainer>
      <BackgroundImage 
        style={{ y: backgroundY }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <ContentContainer 
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MainTitle variants={titleVariants}>
          LUXE
        </MainTitle>
        
        <SubTitle variants={subtitleVariants}>
          JEWELRY COLLECTION
        </SubTitle>
        
        <Description variants={descriptionVariants}>
          Discover timeless elegance with our handcrafted jewelry pieces. 
          Each design tells a story of luxury, sophistication, and unparalleled beauty 
          that transcends generations.
        </Description>
        
        <ButtonContainer
          variants={buttonContainerVariants}
        >
          <CTAButton
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE COLLECTION
          </CTAButton>
          
          <SecondaryButton
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WATCH STORY
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
      
      {/* ScrollIndicator di luar ContentContainer supaya tidak terpengaruh parallax */}
      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        SCROLL TO DISCOVER
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
