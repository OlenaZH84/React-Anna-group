import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';

import { useState, useEffect } from 'react';
// import Home from './pages/Home';
// import { Route, Routes } from 'react-router';
// import ProductsList from './components/ProductsList';

function App() {
  const [activeItem, setActiveItem] = useState('all');
  // const [goods, setGoods] = useState([]);
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((response) => response.json())
  //     .then((data) => setGoods([data]));
  // }, []);
  // console.log(goods);

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
      </header>

      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />
      {/* <Categories onClickCategory={setGoods} activeCategory={goods} /> */}
      <ul className="products">
        {/* <Products activeCategory={goods} /> */}
        <Products activeCategory={activeItem} />
      </ul>
      {/* <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductsList />} />
      </Routes> */}
    </div>
  );
}
export default App;
