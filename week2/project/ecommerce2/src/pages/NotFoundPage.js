import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <p className="colorP">Page is not foud</p>
      <Link to={'/'}>
        <button className="btn_css">return to home page</button>
      </Link>
    </div>
  );
}
