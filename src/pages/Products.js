import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled(motion.div)`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 0;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 0;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 8px;
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

const PageDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const FilterSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? 'linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B)' : 'transparent'};
  color: ${props => props.active ? '#000' : 'transparent'};
  ${props => !props.active && `
    background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
  border: 1px solid;
  border-image: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B) 1;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: transparent;
    color: #fff;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: #fff;
    background-clip: unset;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  }
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 0;
  padding-bottom: 60px;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
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
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent);
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
  margin-bottom: 8px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
`;

const ProductCategory = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
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

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

  // Page animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const allProducts = [
    // Rings
    { id: 1, name: 'Diamond Eternity Ring', category: 'Rings', price: '$2,850', image: 'https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Emerald Vintage Ring', category: 'Rings', price: '$5,500', image: 'https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Rose Gold Engagement Ring', category: 'Rings', price: '$3,200', image: 'https://images.unsplash.com/photo-1603561593143-2d9242789dfb?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Sapphire Wedding Band', category: 'Rings', price: '$1,800', image: 'https://images.pexels.com/photos/15684184/pexels-photo-15684184.jpeg?_gl=1*1td5vso*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQxNTUkajMzJGwwJGgw' },
    
    // Necklaces
    { id: 5, name: 'Pearl Elegance Necklace', category: 'Necklaces', price: '$1,650', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 6, name: 'Diamond Tennis Necklace', category: 'Necklaces', price: '$4,200', image: 'https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, name: 'Gold Chain Pendant', category: 'Necklaces', price: '$980', image: 'https://images.unsplash.com/photo-1656428361240-47e1737b7dce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Ruby Heart Necklace', category: 'Necklaces', price: '$2,400', image: 'https://images.pexels.com/photos/15684182/pexels-photo-15684182.jpeg?_gl=1*ci5isi*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQ2MjkkajU0JGwwJGgw' },
    
    // Earrings
    { id: 9, name: 'Sapphire Drop Earrings', category: 'Earrings', price: '$3,200', image: 'https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, name: 'Diamond Stud Earrings', category: 'Earrings', price: '$2,050', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 11, name: 'Pearl Dangle Earrings', category: 'Earrings', price: '$5,100', image: 'https://images.pexels.com/photos/13595830/pexels-photo-13595830.jpeg?_gl=1*1s1kyvl*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQ4MjgkajMyJGwwJGgw' },
    { id: 12, name: 'Gold Hoop Earrings', category: 'Earrings', price: '$1.050', image: 'https://images.unsplash.com/photo-1689775703005-94770a8b561d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    
    // Bracelets
    { id: 13, name: 'Gold Tennis Bracelet', category: 'Bracelets', price: '$4,100', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 14, name: 'Diamond Link Bracelet', category: 'Bracelets', price: '$6,800', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 15, name: 'Pearl Charm Bracelet', category: 'Bracelets', price: '$1,350', image: 'https://images.pexels.com/photos/20768643/pexels-photo-20768643.jpeg?_gl=1*23xvlt*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjUxNzUkajQzJGwwJGgw' },
    { id: 16, name: 'Silver Bangle Set', category: 'Bracelets', price: '$5.890', image: 'https://cdn.pixabay.com/photo/2015/03/13/14/44/bracelet-671791_1280.jpg' }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

  return (
    <ProductsContainer
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <PageHeader>
          <PageTitle variants={itemVariants}>
            OUR COLLECTION
          </PageTitle>
          
          <PageDescription variants={itemVariants}>
            Explore our complete collection of handcrafted jewelry pieces, 
            each designed with precision and passion for timeless elegance.
          </PageDescription>
        </PageHeader>

        <FilterSection variants={itemVariants}>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterSection>
        
        <ProductGrid>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProductImage src={product.image} />
              <ProductInfo>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </ProductsContainer>
  );
};

export default Products;
