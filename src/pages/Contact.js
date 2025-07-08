import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContent = styled.div`
  text-align: center;
  color: white;
`;

const ContactComponent = () => {
  return (
    <ContactContent>
      <h1>Contact Us</h1>
      <p>Get in touch with us for your luxury jewelry needs.</p>
    </ContactContent>
  );
};

const Contact = () => {
  return (
    <ContactContainer>
      <ContactComponent />
    </ContactContainer>
  );
};

export default Contact;
