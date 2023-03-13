import React from 'react';
import Products from './Products';
import products from '../fake-data/all-products';

export default function CategoriesList({ className1, onClickCategory, index }) {
  //   console.log(onClickCategory);

  return (
    <>
      <div key={index} className={className1} onClick={() => onClickCategory}>
        {onClickCategory}
      </div>
      {/* <div
        className={selectedNotSelected}
        key={`${categoryName}_${index}`}
        onClick={() => onClickCategory(categoryName)}>
        {categoryName}
      </div> */}
    </>
  );
}
