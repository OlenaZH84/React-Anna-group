import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function ProductsList({ name, src, alt, index, forlink }) {
  return (
    <>
      <li key={index} className="products--item">
        <Link to={`product/${forlink}`}>
          <div className="product">
            <img className="product--image" src={src} alt={alt} />
            <span className="product--title">{name}</span>
            {/* <img className="product--image" src={obj.image} alt={obj.title} /> */}
            {/* <span className="product--title">{discriptionName}</span> */}
          </div>
        </Link>
      </li>
    </>
  );
}
