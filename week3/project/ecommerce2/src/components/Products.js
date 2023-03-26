import React, { useState, useEffect, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import Product from './Product';
import ErrorMsg from '../pages/Error';
import { StoreContext } from '../context/CategoriesContext';
import { FavouriteListContext } from '../context/FavouriteList';

export default function Products() {
  const { activeCategory } = useContext(StoreContext);
  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);

  // const [cardItems, setCardItems] = useState([]);
  const { data, error, isLoading, cusBigFetch, cusSmallFetch } = useFetch();
  const getProductList = React.useCallback(async () => {
    const url =
      activeCategory !== 'all'
        ? `https://dummyjson.com/products/category/${activeCategory}`
        : 'https://dummyjson.com/products';
    cusBigFetch(url);
  }, [activeCategory]);
  useEffect(() => {
    getProductList();
  }, [activeCategory, getProductList]);
  const onAddToFav = (obj, id) => {
    const isFavouriteList = favouriteList.includes(id);

    if (!isFavouriteList) {
      setFavouriteList((prev) => [...prev, id]);
    } else {
      setFavouriteList((prev) => prev.filter((item) => item !== id));
    }
  };
  console.log('products=', favouriteList);

  return (
    <>
      {error && <ErrorMsg msg={error} />}

      {isLoading && <h2>Loading...</h2>}
      <ul className="products">
        {data &&
          data.products.map((item, index) => {
            return (
              <li className="products--item" key={index}>
                <Product
                  name={item.title}
                  src={item.images[0]}
                  alt={item.title}
                  key={index}
                  id={item.id}
                  onClickHeart={(obj, id) => onAddToFav(obj, item.id)}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
