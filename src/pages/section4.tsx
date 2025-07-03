import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickDisplay = () => {
    setIsVisible(true);
  };

  const handleClickConceal = () => {
    setIsVisible(false);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {isVisible && <h2 className="mb-4 text-center text-6xl">Hello</h2>}

          <div className="flex justify-center gap-x-4">
            <Button onClick={handleClickDisplay} label="Display" variant="primary"></Button>
            <Button onClick={handleClickConceal} label="Conceal" variant="primary"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
