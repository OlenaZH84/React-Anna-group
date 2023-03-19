import React, { useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Nav from './components/Nav';

function App() {
  const [activeItem, setActiveItem] = useState('all');
  // console.log(activeItem);
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <Nav />
      </div>

      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />

      <Products activeCategory={activeItem} />
    </div>
  );
}
export default App;
