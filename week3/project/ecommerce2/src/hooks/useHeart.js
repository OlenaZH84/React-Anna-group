import { useState, useContext } from 'react';
import { FavouriteListContext } from '../context/FavouriteList';
import imgHeart from '../assets/heart-regular.svg';
import imgHeartBlack from '../assets/heart-solid.svg';

export const useHeart = () => {
  const [heartChecked, setheartChecked] = useState(imgHeart);
  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);

  const onAddToFav = (id) => {
    const isFavouriteList = favouriteList.includes(id);
    if (!isFavouriteList) {
      setFavouriteList((prev) => [...prev, id]);
      setheartChecked(imgHeartBlack);
    } else {
      setFavouriteList((prev) => prev.filter((item) => item !== id));
      setheartChecked(imgHeart);
    }
  };
  return { heartChecked, favouriteList, onAddToFav };
};
