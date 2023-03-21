import React, { createContext, useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Nav from './components/Nav';

export const StoreContext = createContext();
// console.log(StoreContext);
function App() {
  const [activeItem, setActiveItem] = useState('all');
  // console.log(activeItem);
  return (
    // <StoreContext.Provider value={[activeItem, setActiveItem]}>
    <div className="App">
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <Nav />
      </div>
      {/* <Categories />
        <Products /> */}
      <Categories onClickCategory={setActiveItem} activeCategory={activeItem} />

      <Products activeCategory={activeItem} />
    </div>
    // </StoreContext.Provider>
  );
}
export default App;
