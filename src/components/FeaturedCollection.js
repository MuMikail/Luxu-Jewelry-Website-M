import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
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
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.8;
`;

const ViewAllButton = styled(motion(Link))`
  display: inline-block;
  padding: 12px 30px;
  background: transparent;
  color: transparent;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 1px solid;
  border-image: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B) 1;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
    color: #fff;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: #fff;
    background-clip: unset;
    transform: translateY(-2px);
  }
`;


const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImage = styled.div`
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(192, 192, 192, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProductCard}:hover &::before {
    opacity: 1;
  }
`;

const ProductInfo = styled.div`
  padding: 30px;
  text-align: center;
`;

const ProductName = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
`;

const ProductPrice = styled.p`
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const FeaturedCollection = () => {
  // Produk pilihan untuk homepage (hanya 6 items)
  const featuredProducts = [
    {
      id: 1,
      name: 'Diamond Eternity Ring',
      price: '$2,850',
      image: 'https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Pearl Elegance Necklace',
      price: '$1,650',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Sapphire Drop Earrings',
      price: '$3,200',
      image: 'https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Gold Tennis Bracelet',
      price: '$4,100',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Emerald Vintage Ring',
      price: '$5,500',
      image: 'https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      name: 'Moissanite Earrings',
      price: '$2,200',
      image: 'https://images.unsplash.com/photo-1727947553983-1e1aee64605b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 7,
      name: 'Ouroboros Ring',
      price: '$2,300',
      image: 'https://images.unsplash.com/photo-1677316732675-be39915a17d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      name: 'Diamond Stud Earrings',
      price: '$2,050',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <FeaturedContainer>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            FEATURED COLLECTION
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our handpicked selection of exquisite jewelry pieces
          </Subtitle>
          
          <ViewAllButton
            to="/products"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            VIEW ALL COLLECTION
          </ViewAllButton>
        </SectionHeader>
        
        <ProductGrid>
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductImage src={product.image} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </FeaturedContainer>
  );
};

export default FeaturedCollection;