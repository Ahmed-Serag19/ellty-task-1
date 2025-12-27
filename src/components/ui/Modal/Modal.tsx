import React, { useEffect, useRef } from 'react';
import type { ModalProps } from '../../../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={modalRef} className="modal-content">
        {title && (
          <div className="modal-header">
            <span>{title}</span>
            <button className="modal-close-btn" onClick={onClose}>&times;</button>
          </div>
        )}
        {!title && (
           <div className="modal-close-header">
             <button className="modal-close-btn" onClick={onClose}>&times;</button>
           </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
