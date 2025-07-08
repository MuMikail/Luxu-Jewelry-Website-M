import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
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


const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 50px 40px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.05);
  }
`;



const ServiceTitle = styled.h3`
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
`;


const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const services = [
  {
    id: 1,
    icon: "DESIGN",
    title: "CUSTOM DESIGN",
    description: "Create bespoke jewelry pieces tailored to your unique vision and personal style with our master craftsmen."
  },
  {
    id: 2,
    icon: "REPAIR",
    title: "EXPERT REPAIR",
    description: "Professional restoration and repair services to bring your cherished jewelry back to its original glory."
  },
  {
    id: 3,
    icon: "SIZING",
    title: "PRECISE SIZING",
    description: "Perfect fit guaranteed with our precision sizing service for rings, bracelets, and necklaces."
  },
  {
    id: 4,
    icon: "LUXURY",
    title: "LUXURY PACKAGING",
    description: "Every piece comes beautifully presented in our signature luxury packaging, perfect for gifting."
  },
  {
    id: 5,
    icon: "WARRANTY",
    title: "LIFETIME WARRANTY",
    description: "Comprehensive lifetime warranty on all our pieces, ensuring your investment is protected forever."
  },
  {
    id: 6,
    icon: "CARE",
    title: "CLEANING SERVICE",
    description: "Complimentary professional cleaning service to keep your jewelry sparkling like new."
  }
];

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Exceptional service that matches the quality of our jewelry
          </Subtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
