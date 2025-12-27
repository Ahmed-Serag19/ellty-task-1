import React from 'react';
import type { CheckboxRowProps } from '../../../types';

export const CheckboxRow: React.FC<CheckboxRowProps> = ({ label, checked, onChange }) => {
  const checkboxClass = `checkbox-custom ${checked ? 'checkbox-custom-checked' : ''}`;

  return (
    <div className="checkbox-row" onClick={onChange}>
      <span className="checkbox-row-label">{label}</span>
      <div className={checkboxClass}>
        {checked && (
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
};
