import React, { useState, useContext, useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import Nav from '../components/Nav';
import Product from '../components/Product';
import { FavouriteListContext } from '../context/FavouriteList';
import { useHeart } from '../hooks/useHeart';
import { useFetch } from '../hooks/useFetch';
import ErrorMsg from '../pages/Error';

export default function Favourites({ name, src, alt, id, onClick }) {
  // console.log(name);
  const { favouriteList, seFavouriteList } = useContext(FavouriteListContext);
  console.log(favouriteList, 'FAV page');
  const { heartChecked, onAddToFav } = useHeart(id);
  const { error, isLoading, cusBigFetch } = useFetch();
  const onClickFav = () => {
    onAddToFav(id);
  };
  // useEffect(() => {
  //   async function getFavouriteList() {
  //     for (let i = 0; i < favouriteList.length; i++) {
  //       let data = await cusBigFetch(`https://dummyjson.com/products/${favouriteList[i].id}`);
  //       seFavouriteList((prev) => [...prev, data]);
  //     }
  //   }
  //   getFavouriteList();
  // }, []);

  return (
    <>
      {error && <ErrorMsg msg={error} />}
      {isLoading && <h2>Loading...</h2>}
      <div className="title-container">
        <h1 className="title-container--title">Favourites</h1>
        <Nav />
      </div>
      <div className="product">
        {favouriteList.length === 0 ? (
          <h3 className="title-container--title">You don't have favourite product</h3>
        ) : (
          ''
        )}
        <div className="product-image--container">
          <img className="product--image" src={src} alt={alt} />
          <div className="product-image--favourite-container">
            <img onClick={onClickFav} src={heartChecked} alt="heart" />
          </div>
        </div>
        <span className="product--title">{name}</span>
      </div>
      {/* {error && <ErrorMsg msg={error} />}

      {isLoading && <h2>Loading...</h2>}

      <div className="title-container">
        <h1 className="title-container--title">Favourites</h1>
        <Nav />
      </div>
      {favouriteList.length === 0 ? (
        <h3>You don't have favourite product</h3>
      ) : (
        <div className="product">
          <div className="product-image--container">
            {favouriteList &&
              favouriteList.map((item, id) => {
                <>
                  <Product name={item.title} src={item.images[0]} alt={item.title} key={id} />
                  <img onClick={onClickFav} src={heartChecked} alt="heart" />
                </>;
                // <img className="product--image" src={src} alt={alt} />
                // <div className="product-image--favourite-container">
                //   <img onClick={onClickFav} src={heartChecked} alt="heart" />
                // </div>
              })}
          </div>
          <span className="product--title">{name}</span>
        </div>
      )} */}
    </>
  );
}
