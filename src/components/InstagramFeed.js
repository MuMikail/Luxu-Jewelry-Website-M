import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InstagramContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
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

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

// const InstagramPost = styled(motion.div)`
//   aspect-ratio: 1;
//   overflow: hidden;
//   position: relative;
//   background-image: url(${props => props.src});
//   background-size: cover;
//   background-position: center;
//   cursor: pointer;
//   background: rgba(255, 255, 255, 0.02);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 215, 0, 0.1);
//   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       45deg, 
//       rgba(0, 0, 0, 0.7) 0%, 
//       rgba(255, 215, 0, 0.1) 50%,
//       rgba(0, 0, 0, 0.7) 100%
//     );
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }

//   &:hover {
//     transform: translateY(-10px);
//     border-color: rgba(255, 215, 0, 0.3);
//     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
//     &::before {
//       opacity: 1;
//     }
//   }
// `;

const InstagramPost = styled(motion.div)`
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Fallback jika gambar tidak load */
  background-color: rgba(255, 255, 255, 0.02);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg, 
      rgba(0, 0, 0, 0.7) 0%, 
      rgba(255, 215, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

const PostOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 2;
  text-align: center;

  ${InstagramPost}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const FollowButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 18px 40px;
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  color: #ffd700;
  text-decoration: none;
  border: 2px solid #ffd700;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: rgba(255, 215, 0, 0.9);
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  }
`;

const InstagramHandle = styled(motion.p)`
  font-size: 1.1rem;
  color: #ffd700;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 40px;
  font-style: italic;
`;

const InstagramFeed = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const instagramPosts = [
    'https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <InstagramContainer ref={ref} id="instagram">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            FOLLOW OUR JOURNEY
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get inspired by our latest creations and behind-the-scenes moments
          </Subtitle>
          
          <InstagramHandle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            @qimik26
          </InstagramHandle>
        </SectionHeader>

        <InstagramGrid>
          {instagramPosts.map((src, index) => (
            <InstagramPost
              key={index}
              src={src}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <PostOverlay>VIEW POST</PostOverlay>
            </InstagramPost>
          ))}
        </InstagramGrid>

        <div style={{ textAlign: 'center' }}>
          <FollowButton
            href="https://instagram.com/qimik26"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FOLLOW US ON INSTAGRAM
          </FollowButton>
        </div>
      </Container>
    </InstagramContainer>
  );
};

export default InstagramFeed;
