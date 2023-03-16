import React, { useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  const [activeItem, setActiveItem] = useState('all');
  // console.log(activeItem);
  return (
    <div className="App">
      <header>
        <h1>Products</h1>
      </header>

      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />

      <Products activeCategory={activeItem} />
      {/* <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes> */}
      {/*  <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes> */}
    </div>
  );
}
export default App;
