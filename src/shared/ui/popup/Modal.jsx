import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    // затемнённый фон
    <div className="modal-overlay" onClick={onClose}>
      
      {/* само окно */}
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} // чтобы не закрывалось при клике внутри
      >
        
        {/* верхняя часть */}
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>

        {/* контент */}
        <div className="modal-body">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;