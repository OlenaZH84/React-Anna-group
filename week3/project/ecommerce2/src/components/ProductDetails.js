import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMsg from '../pages/Error';
import Nav from './Nav';
import { useFetch } from '../hooks/useFetch';
import { FavouriteListContext } from '../context/FavouriteList';
import { useHeart } from '../hooks/useHeart';

export default function ProductDetails() {
  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  console.log(favouriteList, 'favouriteListPD');
  const { id } = useParams();

  const { data, error, isLoading, cusBigFetch } = useFetch();
  const getProduct = async () => {
    cusBigFetch(`https://dummyjson.com/products/${id}`);
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  const { heartChecked, onAddToFav } = useHeart(id);
  console.log('productDET', favouriteList);
  console.log(heartChecked, 'heart');
  // heartChecked, onAddToFav

  // const onClickFav = () => {
  //   onClickHeart({ favouriteList });

  //   console.log('product', favouriteList);
  //   setheartChecked(!heartChecked);
  // };
  const onClickFav = () => {
    onAddToFav(id);
  };

  return (
    <>
      {error && <ErrorMsg msg={error} />}
      {isLoading && <h2>Loading...</h2>}
      {data && (
        <div className="product-details">
          <div className="title-container">
            <h1 className="title-container--title">{data.title}</h1>
            <Nav />
          </div>
          <div className="product-details--information">
            <div className="product-details--image">
              <div className="product-image--container">
                <img className="product-image" src={data.images[0]} alt={data.title} />
                <div className="product-image--favourite-container">
                  <img onClick={onClickFav} src={heartChecked} alt="heart" />
                </div>
              </div>
            </div>
            <p className="product-details--description">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
