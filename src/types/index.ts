import React from 'react';

// Component Props Interfaces
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export interface CheckboxRowProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface PageSelectorProps {
  pages: PageData[];
}

// Data Models
export interface PageData {
  id: string;
  name: string;
}
