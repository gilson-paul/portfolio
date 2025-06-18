import React, { useRef } from 'react';

const ServiceCard = ({ children, className = '', wrapperClassName = '' }) => {
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = innerRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const percentX = (x / rect.width - 0.5) * 2;
    const percentY = (y / rect.height - 0.5) * 2;
  
    // Dynamically calculate maxTilt based on width
    let maxTilt;
    if (rect.width <= 400) {
      maxTilt = 10; // small card
    } else if (rect.width <= 800) {
      maxTilt = 6; // medium card
    } else {
      maxTilt = 3; // full-width card
    }
  
    const rotateX = -percentY * maxTilt;
    const rotateY = percentX * maxTilt;
  
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  

  const handleMouseLeave = () => {
    const card = innerRef.current;
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className={`h-52 ${wrapperClassName}`}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className={`w-full rounded-2xl shadow-xl transition-transform duration-500 ease-out flex items-center justify-center ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
