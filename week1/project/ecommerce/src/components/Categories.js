import React from 'react';
import categories from '../fake-data/all-categories';
import Category from './Category';
import { useState, useEffect } from 'react';

export default function Categories({ onClickCategory, activeCategory }) {
  const setCategoryName = (name) => name.slice(6);
  function setSelected(items, activeCategory) {
    if (activeCategory === 'all' || items !== activeCategory) {
      return 'categories--item';
    } else {
      return 'categories--item categories--item-selected';
    }
  }
  //   const [activeCat, setActiveCat] = useState([]);
  //   useEffect(() => {
  //     fetch('https://fakestoreapi.com/products/categories')
  //       .then((response) => response.json())
  //       .then((data) => setActiveCat([data]));
  //   }, []);
  //   console.log(activeCat);
  return (
    <div className="categories">
      {categories.map((items, index) => {
        const categoryName = setCategoryName(items);
        const selectedNotSelected = setSelected(categoryName, activeCategory);
        // console.log(selectedNotSelected);
        return (
          <Category
            className1={selectedNotSelected}
            onClickCategory={() => onClickCategory(categoryName)}
            text={categoryName}
            key={`${categoryName}_${index}`}
          />
        );
      })}
    </div>
    //     <div className="categories">
    //     {
    //       /* {activeCat.map((item, index) => (
    //         <Category text={item} key={index} />
    //       ))}
    //     </div>
    //   ); */
    //     }

    //       {
    //         // const categoryName = setCategoryName(items);
    //         // console.log(items, index);
    //         // const selectedNotSelected = setSelected(items, activeCategory);

    //         return (
    //           <Category />
    //           //   <Category
    //           //     className1={selectedNotSelected}
    //           //     onClickCategory={() => onClickCategory(activeCat)}
    //           //     text={activeCat}
    //           //     key={index}
    //           //     //       key={`${activeCat}_${index}`}
    //           //   />
    //         );
    //       }
    //       )}
    //     </div>
    //   );
    //   return (
    //     <div className="categories">
    //       {categories.map((items, index) => {
    //         const categoryName = setCategoryName(items);
    //         const selectedNotSelected = setSelected(categoryName, activeCategory);
    //         return (
    //           <div
    //             className={selectedNotSelected}
    //             key={`${categoryName}_${index}`}
    //             onClick={() => onClickCategory(categoryName)}>
    //             {categoryName}
    //           </div>
    //         );
    //       })}
    //     </div>
  );
}
