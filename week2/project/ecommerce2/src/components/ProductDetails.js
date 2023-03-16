import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);

      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="product-details">
      <div className="title-container">
        <h1 className="title-container--title">{product.title}</h1>
      </div>
      <div className="product-details--information">
        <div className="product-details--image">
          <div className="product-image--container">
            <img className="product-image" src={product.image} alt={product.title} />
          </div>
        </div>
        <p className="product-details--description">{product.description}</p>
      </div>
    </div>
  );
}
