import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(3)';
      cursor.style.backgroundColor = '#D4AF37';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.backgroundColor = '#D4AF37';
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);
};

export default useCustomCursor;
