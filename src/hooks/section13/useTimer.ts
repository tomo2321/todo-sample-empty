import { useEffect, useState } from 'react';

type UseTimer = () => {
  second: number;
  isActive: boolean;
  handleClickToggle: () => void;
  handleClickReset: () => void;
};

export const useTimer: UseTimer = () => {
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setSecond((prevState) => prevState + 1);
      }, 1000);
    } else if (!isActive && second !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [second, isActive]);

  const handleClickToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleClickReset = () => {
    setSecond(0);
    setIsActive(false);
  };

  return {
    second,
    isActive,
    handleClickToggle,
    handleClickReset,
  };
};
