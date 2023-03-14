import React from 'react';

export default function Category({ className1, onClickCategory, text }) {
  // { className1, onClickCategory, text }
  return (
    <div className={className1} onClick={onClickCategory}>
      {text}
    </div>
  );
}
