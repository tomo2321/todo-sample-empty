import { useEffect, useState } from 'react';

type UseChangeDisplayItem = (
  itemList: unknown[],
  numDisplay: number,
) => {
  itemIndex: number;
  displayPositionIndex: number;
};

export const useChangeDisplayItem: UseChangeDisplayItem = (
  itemList: unknown[],
  numDisplay: number,
) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [displayPositionIndex, setDisplayPositionIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setItemIndex((prevState) => (prevState !== itemList.length - 1 ? prevState + 1 : 0));
      setDisplayPositionIndex((prevState) => (prevState !== numDisplay - 1 ? prevState + 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [itemIndex]);

  return {
    itemIndex,
    displayPositionIndex,
  };
};
