import React from 'react';

export default function Category({ className1, name, onClickCategory }) {
  return (
    <div className={className1} onClick={onClickCategory}>
      {name}
    </div>
  );
}
