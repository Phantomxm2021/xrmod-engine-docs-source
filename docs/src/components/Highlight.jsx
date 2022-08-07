import React from 'react';

export const Highlight = ({children, color}) => (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '5px',
        color: '#fff',
        padding: '0.15rem',
      }}>
      {children}
    </span>
  );