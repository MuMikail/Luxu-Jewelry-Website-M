import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: 300;
  background: ${props => props.theme.colors.gradient.goldSilver};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  letter-spacing: 4px;
  font-family: ${props => props.theme.fonts.primary};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 30px 20px;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
  }
`;

const NavLink = styled.a`
  color: ${props => props.active ? props.theme.colors.gold : 'rgba(255, 255, 255, 0.8)'};
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 1px;
    background: ${props => props.theme.colors.gradient.goldSilver};
    transition: width 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.theme.colors.gradient.goldSilver};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  background: ${props => props.theme.colors.gradient.goldSilver};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function untuk handle navigation dengan check current page
  const handleNavigation = (e, path, targetId = null) => {
    e.preventDefault();
    
    // Jika targetId ada (untuk home sections)
    if (targetId) {
      // Jika di halaman lain, navigate ke home dengan React Router
      if (location.pathname !== '/') {
        navigate('/');
        // Tunggu sebentar untuk page load, baru scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            window.history.pushState(null, null, `/#${targetId}`);
          }
        }, 100);
        setMobileMenuOpen(false);
        return;
      }
      
      // Check jika sudah di section yang sama
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash === targetId) {
        console.log('Already at this section');
        setMobileMenuOpen(false);
        return;
      }
      
      // Smooth scroll ke section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        window.history.pushState(null, null, `/#${targetId}`);
      }
      
      setMobileMenuOpen(false);
      return;
    }
    
    // Untuk halaman biasa (Products, Services, About, Contact)
    // Jika sudah di halaman yang sama, jangan navigate
    if (location.pathname === path) {
      console.log('Already at this page');
      setMobileMenuOpen(false);
      return;
    }
    
    // Navigate ke halaman baru dengan React Router (ada parallax effect)
    navigate(path);
    setMobileMenuOpen(false);
  };

  // Handle home click
  const handleHomeClick = (e) => {
    e.preventDefault();
    
    // Jika di halaman lain, navigate ke home dengan React Router
    if (location.pathname !== '/') {
      navigate('/');
      setMobileMenuOpen(false);
      return;
    }
    
    // Jika sudah di home dan di top, jangan scroll
    if (window.scrollY < 100 && !window.location.hash) {
      console.log('Already at home top');
      setMobileMenuOpen(false);
      return;
    }
    
    // Scroll ke top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, null, '/');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/', isHome: true },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Logo onClick={handleHomeClick}>LUXE</Logo>
        
        <Nav isOpen={mobileMenuOpen}>
          {navItems.map((item) => {
            if (item.isHome) {
              return (
                <NavLink
                  key={item.name}
                  href="/"
                  onClick={handleHomeClick}
                  active={location.pathname === '/' && !window.location.hash}
                >
                  {item.name}
                </NavLink>
              );
            }
            
            return (
              <NavLink
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.targetId)}
                active={
                  location.pathname === item.path || 
                  (location.pathname === '/' && window.location.hash === `#${item.targetId}`)
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </Nav>
        
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </MobileMenuButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
