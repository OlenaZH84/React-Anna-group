import React, { useEffect, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import Product from './Product';
import ErrorMsg from '../pages/Error';
import { StoreContext } from '../context/CategoriesContext';
import { FavouriteListContext } from '../context/FavouriteList';
import { useHeart } from '../hooks/useHeart';

export default function Products() {
  const { activeCategory } = useContext(StoreContext);
  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  console.log(favouriteList);
  const { onAddToFavor } = useHeart();
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
                  onClick={onAddToFavor}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
