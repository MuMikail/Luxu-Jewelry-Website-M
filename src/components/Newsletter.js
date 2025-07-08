import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewsletterContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.01) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NewsletterContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ffd700, transparent);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.8;
`;

const NewsletterForm = styled(motion.form)`
  display: flex;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 18px 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
  }
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 18px 35px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  color: #000;
  border: 2px solid transparent;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  
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
    background: linear-gradient(45deg, #B8860B, #D4AF37, #C0C0C0);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 18px 25px;
  }
`;


const SuccessMessage = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 40px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  .highlight {
    color: #ffd700;
    font-weight: 400;
    display: block;
    margin-bottom: 15px;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <NewsletterContainer ref={ref} id="newsletter">
      <Container>
        <NewsletterContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            STAY CONNECTED
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subscribe to our newsletter for exclusive offers, new collection previews, 
            and jewelry care tips delivered straight to your inbox.
          </Subtitle>

          {!isSubmitted ? (
            <NewsletterForm
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <EmailInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SUBSCRIBE
              </SubmitButton>
            </NewsletterForm>
          ) : (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="highlight">WELCOME TO LUXE</span>
              Thank you for subscribing! You are now part of our exclusive community. 
              You'll receive our latest updates and special offers soon.
            </SuccessMessage>
          )}
        </NewsletterContent>
      </Container>
    </NewsletterContainer>
  );
};

export default Newsletter;
