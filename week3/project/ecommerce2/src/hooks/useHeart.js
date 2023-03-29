import { useState, useContext, useEffect } from 'react';
import { FavouriteListContext } from '../context/FavouriteList';
import imgHeart from '../assets/heart-regular.svg';
import imgHeartBlack from '../assets/heart-solid.svg';

export const useHeart = (itemId) => {
  const ItemIdInNumber = Number(itemId);

  const { favouriteList, setFavouriteList } = useContext(FavouriteListContext);
  const isFavouriteList = favouriteList.includes(ItemIdInNumber);
  console.log('isFavouriteList =', isFavouriteList);
  const [heartChecked, setheartChecked] = useState(() =>
    isFavouriteList ? imgHeartBlack : imgHeart,
  );
  useEffect(() => {
    if (isFavouriteList) {
      setheartChecked(imgHeartBlack);
    } else {
      setheartChecked(imgHeart);
    }
  }, [itemId]);

  const onAddToFavor = () => {
    if (!isFavouriteList) {
      setFavouriteList((prev) => [...prev, ItemIdInNumber]);
      setheartChecked(imgHeartBlack);
    } else {
      setFavouriteList((prev) => prev.filter((item) => item !== ItemIdInNumber));
      setheartChecked(imgHeart);
    }
  };
  console.log(' heartChecked', heartChecked);
  return { heartChecked, onAddToFavor };
};
