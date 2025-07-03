import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const BACKGROUND_COLORS = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];

const Page: NextPage = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const onClickChageColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % BACKGROUND_COLORS.length);
  };

  return (
    <div
      className="h-screen pt-8"
      style={{ backgroundColor: BACKGROUND_COLORS[currentColorIndex] }}
    >
      <div className="flex justify-center">
        <Button onClick={onClickChageColor} label="Click Me" variant="primary" />
      </div>
    </div>
  );
};

export default Page;
