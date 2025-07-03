import { useState } from 'react';

type UseInputText = (initText: string) => {
  text: string;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInputText: UseInputText = (initText: string) => {
  const [text, setText] = useState(initText);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return {
    text,
    handleChangeText,
  };
};
