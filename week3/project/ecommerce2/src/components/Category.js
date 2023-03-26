import React from 'react';

export default function Category({ className1, name, onClick }) {
  return (
    <div className={className1} onClick={onClick}>
      {name}
    </div>
  );
}
