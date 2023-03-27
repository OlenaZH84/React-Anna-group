import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Nav from './components/Nav';
import { StoreContextProvider } from './context/CategoriesContext';

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <Nav />
      </div>

      <StoreContextProvider>
        <Categories />
        <Products />
      </StoreContextProvider>
    </div>
  );
}
export default App;
