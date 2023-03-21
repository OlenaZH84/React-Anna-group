import React, { useState, useEffect, useContext } from 'react';
import Product from './Product';
import ErrorMsg from '../pages/Error';
import { StoreContext } from '../App';

export default function Products(props) {
  // const { activeItem, setActiveItem } = useContext(StoreContext);
  // console.log(state);

  const [activeProd, setActiveProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardItems, setCardItems] = useState([]);
  const [errorObj, setErrorObj] = useState({ isError: false, msg: '' });
  let activeCategory = props.activeCategory;
  const getProductList = React.useCallback(async () => {
    try {
      const promise =
        activeCategory !== 'all'
          ? // ? await fetch(`https://dummyjson.com/products/category/${activeCategory}`)
            // : await fetch('https://dummyjson.com/products');

            await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
          : await fetch('https://fakestoreapi.com/products');
      if (!promise.ok) {
        throw new Error(`Error happend ${promise.status} ${promise.statusText}`);
      }
      const items = await promise.json();
      setActiveProd(items);
      // setActiveProd(items.products);
      // setActiveItem(items.products);
      // console.log(setActiveItem, 'prod');
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);
  useEffect(() => {
    getProductList();
  }, [activeCategory, getProductList]);

  const onAddToFav = (obj) => {
    setCardItems((prev) => [...prev, obj]);
  };
  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {loading && <h2>Loading...</h2>}
      <ul className="products">
        {activeProd.map((item, index) => {
          // console.log(item);
          return (
            <li className="products--item" key={index}>
              <Product
                name={item.title}
                src={item.image}
                alt={item.title}
                key={index}
                forlink={item.id}
                onClickHeart={(obj) => onAddToFav(obj)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
