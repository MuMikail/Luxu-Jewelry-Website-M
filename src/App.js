import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import useCustomCursor from './hooks/useCustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ThreeJSBackground from './components/ThreeJSBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import ParallaxSection from './components/ParallaxSection';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import MouseFollower from './components/MouseFollower';
import CookieConsent from './components/CookieConsent';
import PageTransition from './components/PageTransition';
import Products from './pages/Products';



// Wrapper component untuk AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  // Homepage Component
  const HomePage = () => (
    <PageTransition pageName="LUXE JEWELRY">
      <Hero />
      <ParallaxSection />
      <FeaturedCollection />
      <Testimonials />
      <FAQ />
      <InstagramFeed />
      <Newsletter />
    </PageTransition>
  );

  const ProductsPage = () => (
    <PageTransition pageName="LUXE JEWELRY">
      <Products />
    </PageTransition>
  );
  const ServicesPage = () => (
    <PageTransition pageName="LUXE JEWELRY">
      <Services />
    </PageTransition>
  );
  const AboutPage = () => (
    <PageTransition pageName="LUXE JEWELRY">
      <About />
    </PageTransition>
  );
  const ContactPage = () => (
    <PageTransition pageName="LUXE JEWELRY">
      <Contact />
    </PageTransition>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useCustomCursor();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Smooth scrolling setup
    let lenis;
    
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });
        
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
      } catch (error) {
        console.log('Lenis not available, using default scrolling');
      }
    };

    if (!isLoading) {
      initLenis();
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [isLoading]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <ThreeJSBackground />
            <MouseFollower />
            <Header />
            
            <AnimatedRoutes />
            
            <Footer />
            <BackToTop />
            <CookieConsent />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
