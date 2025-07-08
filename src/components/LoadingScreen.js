import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(192, 192, 192, 0.02) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  z-index: 2;
`;

const LoadingLogo = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 100;
  letter-spacing: 8px;
  background: linear-gradient(
    45deg,
    #D4AF37 0%,
    #FFD700 25%,
    #C0C0C0 50%,
    #B8860B 75%,
    #D4AF37 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  text-align: center;
  position: relative;
 
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const LoadingSubtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 2rem;
  text-transform: uppercase;
`;

const ProgressContainer = styled.div`
  width: 400px;
  max-width: 80vw;
  margin-bottom: 3rem;
  position: relative;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg,
      transparent,
      rgba(212, 175, 55, 0.3),
      transparent
    );
    animation: ${shimmer} 2s linear infinite;
  }
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg,
    #D4AF37 0%,
    #FFD700 50%,
    #C0C0C0 100%
  );
  border-radius: 1px;
  position: relative;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

const ProgressText = styled(motion.div)`
  text-align: center;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-top: 2px solid #D4AF37;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin-bottom: 2rem;
  position: relative;
 
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 2px solid rgba(192, 192, 192, 0.3);
    border-top: 2px solid #C0C0C0;
    border-radius: 50%;
    animation: ${rotate} 0.8s linear infinite reverse;
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 2rem;
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
`;

const LoadingMessages = [
  "Crafting your experience...",
  "Preparing luxury collection...",
  "Loading precious moments...",
  "Polishing the details...",
  "Almost ready..."
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LoadingMessages.length);
    }, 800);

    // Progress simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(messageInterval);
          
          // Langsung panggil onLoadingComplete tanpa delay
          setTimeout(() => {
            onLoadingComplete();
            // Baru setelah itu hide loading screen
            setIsVisible(false);
          }, 1000); // Delay minimal cuma untuk smooth transition
          
          return 100;
        }
        return prev + Math.random() * 5 + 1;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [onLoadingComplete]);

  const dotVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <LoadingContainer
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0
          }}
          transition={{ 
            duration: 0.3, // Lebih cepat lagi
            ease: "easeOut" 
          }}
        >
          <LogoContainer>
            <LoadingLogo
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              LUXE
            </LoadingLogo>
                       
            <LoadingSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Jewelry Collection
            </LoadingSubtitle>
          </LogoContainer>
                   
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <LoadingSpinner />
          </motion.div>
                   
          <ProgressContainer>
            <ProgressTrack>
              <ProgressBar
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </ProgressTrack>
                       
            <ProgressText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {Math.round(progress)}%
            </ProgressText>
          </ProgressContainer>
                   
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '1px',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            {LoadingMessages[messageIndex]}
          </motion.p>
                   
          <LoadingDots>
            {[0, 1, 2].map((i) => (
              <Dot
                key={i}
                custom={i}
                variants={dotVariants}
                animate="animate"
              />
            ))}
          </LoadingDots>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
