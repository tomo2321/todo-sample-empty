import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useChangeColor } from '@/hooks/section6/useChangeColor';

const BACKGROUND_COLORS = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];

const Page: NextPage = () => {
  const { color, onClickChangeColor } = useChangeColor(BACKGROUND_COLORS);

  return (
    <div className="h-screen pt-8" style={{ backgroundColor: color }}>
      <div className="flex justify-center">
        <Button onClick={onClickChangeColor} label="Click Me" variant="primary" />
      </div>
    </div>
  );
};

export default Page;
