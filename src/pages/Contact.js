import React from 'react';
import styled from 'styled-components';
import ContactComponent from '../components/Contact';

const ContactContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactComponent />
    </ContactContainer>
  );
};

export default Contact;
