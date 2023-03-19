import React, { useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  const [activeItem, setActiveItem] = useState('all');

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
      </header>

      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />

      <Products activeCategory={activeItem} />
    </div>
  );
}
export default App;
