import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
  padding: 80px 0 30px;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled(motion.div)``;

const Logo = styled.h3`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 4px;
  font-family: 'Playfair Display', serif;
`;


const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const SectionTitle = styled.h4`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 1px;
    background: #ffd700;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 12px;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    color: #ffd700;
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  line-height: 1.6;
  
  .label {
    margin-right: 15px;
    color: #ffd700;
    font-weight: 400;
    min-width: 80px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  
  .info {
    flex: 1;
  }
`;

const FooterBottom = styled.div`
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const FooterBottomLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Custom Design', href: '#' },
    { name: 'Jewelry Repair', href: '#' },
    { name: 'Ring Sizing', href: '#' },
    { name: 'Appraisals', href: '#' },
    { name: 'Cleaning Service', href: '#' }
  ];

  const socialLinks = [
    { text: 'FB', href: '#', name: 'Facebook' },
    { text: 'IG', href: '#', name: 'Instagram' },
    { text: 'TW', href: '#', name: 'Twitter' },
    { text: 'LI', href: '#', name: 'LinkedIn' }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Logo>LUXE</Logo>
            <Description>
              Creating timeless jewelry pieces that celebrate life's most precious moments. 
              Our commitment to excellence and craftsmanship has made us a trusted name in luxury jewelry for over three decades.
            </Description>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  title={social.name}
                >
                  {social.text}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Quick Links</SectionTitle>
            {quickLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Services</SectionTitle>
            {services.map((service, index) => (
              <FooterLink key={index} href={service.href}>
                {service.name}
              </FooterLink>
            ))}
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Contact Info</SectionTitle>
            <ContactInfo>
              <span className="label">ADDRESS</span>
              <span className="info">
                123 Luxury Avenue<br />
                Diamond District, NY 10001
              </span>
            </ContactInfo>
            <ContactInfo>
              <span className="label">PHONE</span>
              <span className="info">+1 (555) 123-4567</span>
            </ContactInfo>
            <ContactInfo>
              <span className="label">EMAIL</span>
              <span className="info">info@luxejewelry.com</span>
            </ContactInfo>
            <ContactInfo>
              <span className="label">HOURS</span>
              <span className="info">
                Mon-Sat: 10AM-8PM<br />
                Sun: 12PM-6PM
              </span>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 Mikail. All rights reserved.
          </Copyright>
          <FooterLinks>
            <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>
            <FooterBottomLink href="#">Terms of Service</FooterBottomLink>
            <FooterBottomLink href="#">Sitemap</FooterBottomLink>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
