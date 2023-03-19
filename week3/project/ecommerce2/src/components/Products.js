import React, { useState, useEffect } from 'react';
import Product from './Product';

export default function Products(props) {
  const [activeProd, setActiveProd] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  let activeCategory = props.activeCategory;
  const getProductList = React.useCallback(async () => {
    const promise =
      activeCategory !== 'all'
        ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
        : await fetch('https://fakestoreapi.com/products');
    const items = await promise.json();
    setActiveProd(items);

    setLoading(false);

    // .catch((error) => {
    //   setError(error);
    // });
  }, [activeCategory]);
  useEffect(() => {
    getProductList();
  }, [activeCategory, getProductList]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  // if (error) {
  //   return <h3>Error...</h3>;
  // }

  return (
    <ul className="products">
      {activeProd.map((item, index) => {
        return (
          <li className="products--item" key={index}>
            <Product
              name={item.title}
              src={item.image}
              alt={item.title}
              key={index}
              forlink={item.id}
            />
          </li>
        );
      })}
    </ul>
  );
}
