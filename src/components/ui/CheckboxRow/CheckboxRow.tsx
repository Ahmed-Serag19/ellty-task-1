import React from 'react';
import type { CheckboxRowProps } from '../../../types';

export const CheckboxRow: React.FC<CheckboxRowProps> = ({ label, checked, onChange }) => {
  const checkboxClass = `checkbox-custom ${checked ? 'checkbox-custom-checked' : ''}`;

  return (
    <div className="checkbox-row" onClick={onChange}>
      <span className="checkbox-row-label">{label}</span>
      <div className={checkboxClass}>
        <svg 
          className="checkmark-icon" 
          width="17" 
          height="12" 
          viewBox="0 0 17 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <path d="M1 6L6 11L16 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};
