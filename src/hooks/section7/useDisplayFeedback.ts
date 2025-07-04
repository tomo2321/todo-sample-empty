import { useState } from 'react';

type UseDisplayFeedback = () => {
  inputValue: string;
  feedbackList: string[];
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  handleReset: () => void;
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState('');
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  const handleReset = () => {
    setInputValue('');
    setFeedbackList([]);
  };

  return {
    inputValue,
    feedbackList,
    handleInputChange,
    handleSubmit,
    handleReset,
  };
};
