import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 30px;
  background: none;
  border: none;
  text-align: left;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;

const FAQIcon = styled.span`
  color: #ffd700;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 30px 30px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const faqData = [
  {
    id: 1,
    question: "What materials do you use in your jewelry?",
    answer: "We use only the finest materials including 18k and 22k gold, platinum, sterling silver, and genuine gemstones. All our diamonds are certified and ethically sourced. We also work with precious stones like sapphires, emeralds, and rubies."
  },
  {
    id: 2,
    question: "Do you offer custom jewelry design services?",
    answer: "Yes, we specialize in custom jewelry design. Our master craftsmen work closely with you to bring your vision to life. The process typically takes 4-6 weeks and includes initial consultation, design sketches, 3D modeling, and final crafting."
  },
  {
    id: 3,
    question: "What is your warranty and return policy?",
    answer: "We offer a lifetime warranty on all our pieces covering manufacturing defects. Returns are accepted within 30 days of purchase in original condition. Custom pieces have a 14-day return window. All repairs and maintenance are covered under our warranty."
  },
  {
    id: 4,
    question: "How do I care for my jewelry?",
    answer: "Store jewelry in individual soft pouches, avoid exposure to chemicals and perfumes, clean regularly with appropriate solutions, and bring pieces for professional cleaning every 6 months. We provide detailed care instructions with every purchase."
  },
  {
    id: 5,
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options including 0% interest plans for qualified customers. We accept major credit cards, PayPal, and offer layaway programs. Our financing partners provide competitive rates for larger purchases."
  },
  {
    id: 6,
    question: "How long does custom jewelry take to complete?",
    answer: "Custom pieces typically take 4-6 weeks from design approval to completion. Complex designs may take longer. We provide regular updates throughout the process and will notify you of any delays. Rush orders may be available for additional fees."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <FAQContainer id="faq">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about our jewelry and services
          </Subtitle>
        </SectionHeader>
        
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQQuestion onClick={() => toggleItem(item.id)}>
                {item.question}
                <FAQIcon isOpen={openItems.has(item.id)}>+</FAQIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openItems.has(item.id) && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQContainer>
  );
};

export default FAQ;
