import React from 'react';
import styled from 'styled-components';

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
  return <CursorDot className="cursor-dot" />;
};

export default MouseFollower;
