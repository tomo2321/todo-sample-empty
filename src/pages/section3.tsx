import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useCountUp } from '@/hooks/section3/useCountUp';

const Page: NextPage = () => {
  const { count, onClickCountUp } = useCountUp();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-center text-6xl">{count}</h2>
          <Button onClick={onClickCountUp} label="Count Up" variant="primary"></Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
