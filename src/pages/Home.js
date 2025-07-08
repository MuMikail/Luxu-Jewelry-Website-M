import React from 'react';
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import FeaturedCollection from '../components/FeaturedCollection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <ParallaxSection />
      <FeaturedCollection />
      <Newsletter />
    </>
  );
};

export default Home;
