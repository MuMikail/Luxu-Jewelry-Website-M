import React from 'react';
import styled from 'styled-components';
import AboutComponent from '../components/About';

const AboutContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutComponent />
    </AboutContainer>
  );
};

export default About;
