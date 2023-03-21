import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMsg from '../pages/Error';
import Nav from './Nav';

export default function ProductDetails() {
  // console.log(src);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // console.log(product);
  const [loading, setLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({ isError: false, msg: '' });
  const getProduct = async () => {
    try {
      setLoading(true);
      // const response = await fetch(`https://dummyjson.com/products/${id}`);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error(`Error happend ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setProduct(data);
      // console.log(data);
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {loading && <h2>Loading...</h2>}
      <div className="product-details">
        <div className="title-container">
          <h1 className="title-container--title">{product.title}</h1>
          <Nav />
        </div>
        <div className="product-details--information">
          <div className="product-details--image">
            <div className="product-image--container">
              {/* <img className="product-image" src={product.images} alt={product.title} /> */}
              <img className="product-image" src={product.image} alt={product.title} />
            </div>
          </div>
          <p className="product-details--description">{product.description}</p>
        </div>
      </div>
    </>
  );
}
