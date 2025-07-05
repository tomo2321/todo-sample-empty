import { useState } from 'react';

type UseCelsiusToFahrenheit = () => {
  celsius: number;
  fahrenheit: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useCelsiusToFahrenheit: UseCelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.target.valueAsNumber ?? 0);
  };

  const convertCelsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9) / 5 + 32;
  };

  return {
    celsius,
    fahrenheit: convertCelsiusToFahrenheit(celsius),
    handleChange,
  };
};

export default useCelsiusToFahrenheit;
