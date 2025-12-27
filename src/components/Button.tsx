import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const buttonClass = [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    fullWidth ? 'btn-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClass}
      {...props}
    >
      {label}
    </button>
  );
};
