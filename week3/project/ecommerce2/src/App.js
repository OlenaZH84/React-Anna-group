import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Nav from './components/Nav';
import { StoreContextProvider } from './context/CategoriesContext';
import { FavouriteListContextProvider } from './context/FavouriteList';

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <Nav />
      </div>
      {/* <StoreContext.Provider
        value={{ activeCategory, setActiveCategory, categories, setCategories }}>
        <Categories />
        <Products />
      </StoreContext.Provider> */}
      <StoreContextProvider>
        <Categories />
        <FavouriteListContextProvider>
          <Products />
        </FavouriteListContextProvider>
      </StoreContextProvider>
    </div>
  );
}
export default App;
