import React from 'react';


const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`
      bg-white/10 
      backdrop-blur-md 
      border border-white/20 
      rounded-[30px] 
      p-6 
      ${className} 
    `}>
      {children} 
    </div>
  );
};

export default GlassCard;