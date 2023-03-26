import { createContext, useState } from 'react';
export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  return (
    <StoreContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        categories,
        setCategories,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
