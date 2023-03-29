import React from 'react';
import { Link } from 'react-router-dom';
import { useHeart } from '../hooks/useHeart';

export default function Product({ name, src, alt, id }) {
  // const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  console.log('id prod', id);
  const { heartChecked, onAddToFavor } = useHeart(id);
  // console.log(' heartChecked', heartChecked);

  const onClickFav = () => {
    onAddToFavor();
  };
  return (
    <div className="product">
      <div className="product-image--container">
        <Link to={`/product/${id}`}>
          <img className="product--image" src={src} alt={alt} />
          <span className="product--title">{name}</span>
        </Link>
        <div className="product-image--favourite-container">
          <img onClick={onClickFav} src={heartChecked} alt="heart" />
        </div>
      </div>
    </div>
  );
}
