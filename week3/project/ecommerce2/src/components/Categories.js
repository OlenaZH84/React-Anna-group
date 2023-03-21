import React, { useState, useEffect, useContext } from 'react';
import Category from './Category';
import { StoreContext } from '../App';

// export default function Categories() {
export default function Categories({ onClickCategory, activeCategory }) {
  // console.log(onClickCategory, activeCategory);
  // const [activeItem, setActiveItem] = useContext(StoreContext);

  // console.log(activeItem, 'categ');
  const [activeCat, setActiveCat] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      // fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())

      .then((data) => {
        setActiveCat(data);
        // setActiveItem(data);
        // console.log(data, 'data');
        // console.log(activeItem, 'category');
      });
  }, []);

  function setSelected(items, activeCategory) {
    // console.log(items, activeCategory);
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
        // console.log(selectedNotSelected);
        // const selectedNotSelected = setSelected(item, activeCategory);
        return (
          <Category
            name={item}
            key={`${item}_${index}`}
            // onClickCategory={() => activeItem(item)}
            // onClickCategory={() => setActiveItem(item)}
            onClickCategory={() => onClickCategory(item)}
            className1={selectedNotSelected}
          />
        );
      })}
    </div>
  );
}
