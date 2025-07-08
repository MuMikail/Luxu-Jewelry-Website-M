import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const TextContent = styled(motion.div)``;

const Title = styled(motion.h2)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, #D4AF37, transparent);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const HighlightText = styled(motion.p)`
  font-size: 1.1rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(212, 175, 55, 0.3);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 300;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
`;

const StatLabel = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ImageContent = styled(motion.div)`
  position: relative;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 0 0 0 50px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 0%,
      transparent 50%,
      rgba(212, 175, 55, 0.1) 100%
    );
  }
`;

const About = () => {
  // Hooks dipanggil di dalam component
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <AboutContainer ref={aboutRef} id="about">
      <Container>
        <ContentWrapper>
          <TextContent style={{ y: textY }}>
            <Title
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              OUR STORY
            </Title>
            
            <Description
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              For over three decades, we have been crafting exceptional jewelry pieces that tell stories of love, celebration, and timeless elegance. Our master artisans combine traditional techniques with contemporary design to create pieces that transcend generations.
            </Description>
            
            <HighlightText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "Every piece we create is a testament to our commitment to excellence and our passion for the art of jewelry making."
            </HighlightText>
            
            <StatsContainer>
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <StatNumber>30+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <StatNumber>5000+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <StatNumber>100%</StatNumber>
                <StatLabel>Satisfaction</StatLabel>
              </StatItem>
            </StatsContainer>
          </TextContent>
          
          <ImageContent
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </ContentWrapper>
      </Container>
    </AboutContainer>
  );
};

export default About;
