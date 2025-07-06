import { useState } from 'react';

type UseQuiz = (answer: string) => {
  selectedChoice: string;
  result: string;
  handleChoice: (choice: string) => void;
  handleSubmit: () => void;
};

export const useQuiz: UseQuiz = (answer: string) => {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [result, setResult] = useState('');

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice === answer) {
      setResult('Correct!');
    } else {
      setResult('Incorrect...');
    }
  };

  return {
    selectedChoice,
    result,
    handleChoice,
    handleSubmit,
  };
};

export default useQuiz;
