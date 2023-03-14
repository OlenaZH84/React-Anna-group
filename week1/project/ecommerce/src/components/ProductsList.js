import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function ProductsList({ name, src, alt, index, forlink }) {
  return (
    // <>
    // <ul className="products">
    <li key={index} className="products--item">
      <Link to={`product/${forlink}`}>
        <div className="product">
          <div className="product--image--container">
            <img className="product--image" src={src} alt={alt} />
          </div>
          <span className="product--title">{name}</span>
        </div>
      </Link>
    </li>
    //</ul>
    // </>
  );
}
