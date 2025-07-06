import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
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

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">Elapsed Time: {second}sec</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            <Button
              onClick={handleClickToggle}
              label={!isActive ? 'Start' : 'Stop'}
              variant="primary"
            />
            <Button onClick={handleClickReset} label="Reset" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
