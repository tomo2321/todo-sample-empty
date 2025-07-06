import { useEffect, useState } from 'react';

type UseRandomText = (textList: string[]) => {
  text: string;
};

export const useRandomText: UseRandomText = (textList: string[]) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textList.length);
    setText(textList[randomIndex]);
  }, []);

  return { text };
};
