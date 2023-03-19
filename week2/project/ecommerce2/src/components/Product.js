import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ name, src, alt, forlink }) {
  return (
    <Link to={`product/${forlink}`}>
      <div className="product">
        <img className="product--image" src={src} alt={alt} />
        <span className="product--title">{name}</span>
      </div>
    </Link>
  );
}
