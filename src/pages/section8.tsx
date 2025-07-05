import { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
  const [celsius, setCelsius] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.target.valueAsNumber);
  };

  const convertCelsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="mb-2 flex items-center gap-x-2">
            <label htmlFor="celsius">Celsius: </label>
            <input
              className="rounded-md border px-2 py-1 outline-none"
              id="celsius"
              type="number"
              value={celsius}
              onChange={handleChange}
            />
          </div>
          <p>Fahrenheit: {convertCelsiusToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
