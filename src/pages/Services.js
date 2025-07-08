import React from 'react';
import styled from 'styled-components';
import ServicesComponent from '../components/Services';

const ServicesContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesComponent />
    </ServicesContainer>
  );
};

export default Services;
