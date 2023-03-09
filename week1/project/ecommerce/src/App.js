import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import { useState } from 'react';

function App() {

  const [activeItem, setActiveItem]= useState('all');
     return (
    <div className ='App'>
      <header>
        <h1>Products</h1>
      </header>
       <Categories onClickCategory={setActiveItem} activeCategory={activeItem}/>
        <ul className='products'>
           <Products activeCategory={activeItem}/>
        </ul>
    </div>
    
  );
}

export default App;
