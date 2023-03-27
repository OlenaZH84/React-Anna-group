import React, { useState, useContext, useEffect } from 'react';
import Nav from '../components/Nav';
import { FavouriteListContext } from '../context/FavouriteList';
import { useHeart } from '../hooks/useHeart';
import ErrorMsg from '../pages/Error';
import Product from '../components/Product';

export default function Favourites() {
  const { favouriteList } = useContext(FavouriteListContext);

  const { onAddToFav } = useHeart();

  const [favouriteProduct, setFavouriteProduct] = useState([]);
  const [errorObj, setErrorObj] = useState({ isError: null, msg: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      favouriteList.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`).then((response) => response.json()),
      ),
    )
      .then(setFavouriteProduct)
      .catch((e) => setErrorObj({ isError: true, msg: `Error happened: ${e}` }))
      .finally(() => setLoading(false));
  }, [favouriteList]);

  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {loading && <h2>Loading...</h2>}
      <div className="title-container">
        <h1 className="title-container--title">Favourites</h1>
        <Nav />
      </div>

      {favouriteList.length === 0 ? (
        <h3 className="title-container--title">You don't have favourite products</h3>
      ) : (
        <>
          <ul className="products">
            {favouriteProduct &&
              favouriteProduct.map((item, index) => {
                return (
                  <li className="products--item" key={index}>
                    <Product
                      name={item.title}
                      src={item.images[0]}
                      alt={item.title}
                      key={index}
                      id={item.id}
                      onClickHeart={(obj) => onAddToFav(obj, item.id)}
                    />
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </>
  );
}

/* <ul className="products">
{favouriteProduct.map((item) => {
  const { id, title, images } = item;
  console.log(item, 'item');
  return (
    <li className="products--item" key={id}>
      
      <img className="product--image" src={images[0]} alt={title} />
      <span className="product--title">{title}</span>
      <img onClick={onClickFav} src={heartChecked} alt="heart" />
    </li>
  );
})}
</ul> */
