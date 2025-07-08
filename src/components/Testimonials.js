import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 6px;
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

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 60px 50px;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const Quote = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.5px;
  position: relative;
  
  &::before,
  &::after {
    content: '"';
    font-size: 4rem;
    color: #ffd700;
    position: absolute;
    font-family: 'Playfair Display', serif;
  }
  
  &::before {
    top: -20px;
    left: -20px;
  }
  
  &::after {
    bottom: -60px;
    right: -20px;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border: 2px solid #ffd700;
`;

const ClientDetails = styled.div`
  text-align: left;
`;

const ClientName = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const ClientTitle = styled.p`
  color: #ffd700;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  background: ${props => props.active ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ffd700;
    transform: scale(1.2);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #ffd700;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: -80px;
  }
  
  &.next {
    right: -80px;
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const testimonials = [
  {
    id: 1,
    quote: "The craftsmanship is absolutely stunning. My engagement ring exceeded all expectations and the service was impeccable. Truly a luxury experience from start to finish.",
    name: "Sarah Johnson",
    title: "Bride",
    image: "https://images.unsplash.com/photo-1601745398440-0118cf2a433f?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    quote: "I've been a customer for over 10 years and the quality never disappoints. Their custom design service brought my vision to life perfectly. Highly recommended!",
    name: "Michael Chen",
    title: "Collector",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "The attention to detail and personalized service made our anniversary gift shopping a memorable experience. The pearl necklace is absolutely gorgeous.",
    name: "Emily Rodriguez",
    title: "Anniversary Gift",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    quote: "Professional, elegant, and trustworthy. They restored my grandmother's vintage ring to its original beauty. The sentimental value is priceless.",
    name: "David Thompson",
    title: "Restoration Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            CLIENT STORIES
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What our valued clients say about their experience with us
          </Subtitle>
        </SectionHeader>
        
        <TestimonialSlider>
          <NavigationButton 
            className="prev" 
            onClick={prevTestimonial}
          >
            ‹
          </NavigationButton>
          
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote>{testimonials[currentIndex].quote}</Quote>
              <ClientInfo>
                <ClientImage src={testimonials[currentIndex].image} />
                <ClientDetails>
                  <ClientName>{testimonials[currentIndex].name}</ClientName>
                  <ClientTitle>{testimonials[currentIndex].title}</ClientTitle>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          </AnimatePresence>
          
          <NavigationButton 
            className="next" 
            onClick={nextTestimonial}
          >
            ›
          </NavigationButton>
        </TestimonialSlider>
        
        <NavigationDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </NavigationDots>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
