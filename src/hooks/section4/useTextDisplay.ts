import { useState } from 'react';

type UseTextDisplay = () => {
  isVisible: boolean;
  handleClickDisplay: () => void;
  handleClickConceal: () => void;
};

export const useTextDisplay: UseTextDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickDisplay = () => {
    setIsVisible(true);
  };

  const handleClickConceal = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    handleClickDisplay,
    handleClickConceal,
  };
};
