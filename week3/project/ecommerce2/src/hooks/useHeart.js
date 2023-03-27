import { useState, useContext } from 'react';
import { FavouriteListContext } from '../context/FavouriteList';
import imgHeart from '../assets/heart-regular.svg';
import imgHeartBlack from '../assets/heart-solid.svg';

export const useHeart = (itemId) => {
  const ItemIdInNumber = Number(itemId);

  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  const isFavouriteList = favouriteList.includes(ItemIdInNumber);
  const [heartChecked, setheartChecked] = useState(() =>
    isFavouriteList ? imgHeartBlack : imgHeart,
  );

  const onAddToFav = () => {
    if (!isFavouriteList) {
      setFavouriteList((prev) => [...prev, ItemIdInNumber]);
      setheartChecked(imgHeartBlack);
    } else {
      setFavouriteList((prev) => prev.filter((item) => item !== ItemIdInNumber));
      setheartChecked(imgHeart);
    }
  };
  return { heartChecked, onAddToFav };
};
