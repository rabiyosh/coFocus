import "./GlassCard.scss"


const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`
      ${className} 
    `}>
      {children} 
    </div>
  );
};

export default GlassCard;
