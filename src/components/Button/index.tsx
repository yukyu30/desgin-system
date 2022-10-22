import React from 'react';
import './index.css';

interface ButtonProps {
  appearance?: 'flat' | 'outlined' | 'white' ;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = 'flat',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['flyby-button', `flyby-button--${size}`, `flyby-button--${appearance}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
