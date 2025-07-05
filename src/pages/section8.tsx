import { NextPage } from 'next';

import useCelsiusToFahrenheit from '@/hooks/section8/useCelsiusToFahrenheit';

const Page: NextPage = () => {
  const { celsius, fahrenheit, handleChange } = useCelsiusToFahrenheit();

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
          <p>Fahrenheit: {fahrenheit}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
