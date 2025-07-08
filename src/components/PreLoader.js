import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const PreLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const LoaderContent = styled.div`
  text-align: center;
`;

const LoaderLogo = styled(motion.div)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.4),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props => props.theme.colors.accent};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const PreLoader = () => {
  return (
    <PreLoaderContainer>
      <LoaderContent>
        <LoaderLogo
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Luxe Jewelry
        </LoaderLogo>
        <LoaderSpinner />
      </LoaderContent>
    </PreLoaderContainer>
  );
};

export default PreLoader;
