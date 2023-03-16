import React from 'react';

export default function Category({ className1, name, onClickCategory }) {
  //   console.log(name);
  return (
    <div className={className1} onClick={onClickCategory}>
      {name}
    </div>
  );
}
