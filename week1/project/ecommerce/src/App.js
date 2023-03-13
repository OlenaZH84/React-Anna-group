import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';

import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';

function App() {
  const [activeItem, setActiveItem] = useState('all');
  return (
    <div className="App">
      <header>
        <h1>Products</h1>
      </header>

      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />
      <ul className="products">
        <Products activeCategory={activeItem} />
      </ul>
    </div>
  );
}

export default App;
