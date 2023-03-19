import React, { useState, useEffect } from 'react';
import Product from './Product';
import ErrorMsg from './Error';

export default function Products(props) {
  const [activeProd, setActiveProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorObj, setErrorObj] = useState({ isError: false, msg: '' });
  let activeCategory = props.activeCategory;
  const getProductList = React.useCallback(async () => {
    try {
      const promise =
        activeCategory !== 'all'
          ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
          : await fetch('https://fakestoreapi.com/products');
      if (!promise.ok) {
        throw new Error(`Error happend ${promise.status} ${promise.statusText}`);
      }
      const items = await promise.json();
      setActiveProd(items);
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);
  useEffect(() => {
    getProductList();
  }, [activeCategory, getProductList]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
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
    </>
  );
}
