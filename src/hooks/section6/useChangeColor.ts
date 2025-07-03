import { useState } from 'react';

type UseChangeColor = (backgroundColors: string[]) => {
  color: string;
  onClickChangeColor: () => void;
};

export const useChangeColor: UseChangeColor = (colors: string[]) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const onClickChangeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % colors.length);
  };

  return {
    color: colors[currentColorIndex],
    onClickChangeColor,
  };
};
