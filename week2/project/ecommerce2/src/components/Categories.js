import React, { useState, useEffect } from 'react';
import Category from './Category';

export default function Categories({ onClickCategory, activeCategory }) {
  const [activeCat, setActiveCat] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())

      .then((data) => {
        // console.log('data', data);
        setActiveCat(data);
      });
  }, []);
  //   console.log('activeCat', activeCat);
  function setSelected(items, activeCategory) {
    if (activeCategory === 'all' || items !== activeCategory) {
      return 'categories--item';
    } else {
      return 'categories--item categories--item-selected';
    }
  }
  return (
    <div className="categories">
      {activeCat.map((item, index) => {
        const selectedNotSelected = setSelected(item, activeCategory);
        return (
          <Category
            name={item}
            key={`${item}_${index}`}
            onClickCategory={() => onClickCategory(item)}
            className1={selectedNotSelected}
          />
        );
      })}
    </div>
  );
}
