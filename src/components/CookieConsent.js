import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CookieContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 1.5rem 2rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const CookieText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const CookieButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const CookieButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  
  &.accept {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
  
  &.decline {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
`;

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowConsent(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <CookieContainer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CookieText>
            We use cookies to enhance your browsing experience and provide personalized content. 
            By continuing to use our site, you consent to our use of cookies.
          </CookieText>
          
          <CookieButtons>
            <CookieButton
              className="accept"
              onClick={handleAccept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Accept
            </CookieButton>
            <CookieButton
              className="decline"
              onClick={handleDecline}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Decline
            </CookieButton>
          </CookieButtons>
        </CookieContainer>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
