import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Favourites from '../pages/Favourites';
import imgHeart from '../assets/heart-regular.svg';
import imgHeartBlack from '../assets/heart-solid.svg';
import { FavouriteListContext } from '../context/FavouriteList';
import { useHeart } from '../hooks/useHeart';

export default function Product({ name, src, alt, id, onClickHeart }) {
  // const [heartChecked, setheartChecked] = useState(false);

  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  console.log('product', favouriteList);
  const { heartChecked, onAddToFav } = useHeart(id);

  // console.log('product', favouriteList);
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
    <div className="product">
      <div className="product-image--container">
        <Link to={`product/${id}`}>
          <img className="product--image" src={src} alt={alt} />
          <span className="product--title">{name}</span>
        </Link>
        <div className="product-image--favourite-container">
          <img onClick={onClickFav} src={heartChecked} alt="heart" />
          {/* <img onClick={onClickFav} src={heartChecked ? imgHeartBlack : imgHeart} alt="heart" /> */}
        </div>
      </div>
    </div>
  );
}
