import React, { useState, useEffect, useContext } from 'react';
import Category from './Category';
import { useFetch } from '../hooks/useFetch';

import { StoreContext } from '../context/CategoriesContext';

export default function Categories({}) {
  const { activeCategory, setActiveCategory } = useContext(StoreContext);

  const { data, cusSmallFetch } = useFetch();
  useEffect(() => {
    cusSmallFetch('https://dummyjson.com/products/categories');
  }, []);

  function setSelected(items, activeCategory) {
    if (activeCategory === 'all' || items !== activeCategory) {
      return 'categories--item';
    } else {
      return 'categories--item categories--item-selected';
    }
  }
  return (
    <div className="categories">
      {data &&
        data.map((item, index) => {
          const selectedNotSelected = setSelected(item, activeCategory);

          return (
            <Category
              name={item}
              key={`${item}_${index}`}
              onClick={() => setActiveCategory(item)}
              className1={selectedNotSelected}
            />
          );
        })}
    </div>
  );
}
