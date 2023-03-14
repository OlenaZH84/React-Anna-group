import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router';
import products from '../fake-data/all-products';
import ProductsList from './ProductsList';

export default function Products(props) {
  // console.log(activeCategory);
  // const [activeProd, setActiveProd] = useState([]);
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((response) => response.json())
  //     .then((data) => setActiveCat([data]));
  // }, []);
  // console.log(activeCat);

  let prodList = products;
  if (props.activeCategory !== 'all') {
    prodList = products.filter((item) => {
      return item.category === props.activeCategory;
    });
  }

  const getDiscription = (title) => {
    if (title.includes('FAKE:')) {
      return title.slice(6);
    } else {
      return title;
    }
  };
  return (
    <>
      {prodList.map((obj, index) => {
        const discriptionName = getDiscription(obj.title);

        return (
          <ProductsList
            name={discriptionName}
            src={obj.image}
            alt={obj.title}
            key={index}
            forlink={obj.id}
          />
        );
      })}
    </>
  );
}
