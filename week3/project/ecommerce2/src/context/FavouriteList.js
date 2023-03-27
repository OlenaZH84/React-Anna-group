import { createContext, useState } from 'react';
export const FavouriteListContext = createContext();

export const FavouriteListContextProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);

  const favouriteValue = { favouriteList, setFavouriteList };

  return (
    <FavouriteListContext.Provider value={favouriteValue}>{children}</FavouriteListContext.Provider>
  );
};
