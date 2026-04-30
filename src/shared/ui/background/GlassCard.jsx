import "./GlassCard.scss"


const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`glassWidgets
      ${className} 
    `}>
      {children} 
    </div>
  );
};

export default GlassCard;
