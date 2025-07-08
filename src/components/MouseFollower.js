// Hapus atau ganti dengan yang lebih subtle
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Ganti dengan cursor yang lebih subtle atau hapus sama sekali
const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 4px;
  background: rgba(255, 215, 0, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
  
  /* Hanya tampil saat hover pada elemen tertentu */
  opacity: 0;
  
  &.active {
    opacity: 1;
    transform: scale(3);
  }
`;

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    // Hanya aktif pada elemen tertentu
    const hoverElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <CursorDot
      className={isActive ? 'active' : ''}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
