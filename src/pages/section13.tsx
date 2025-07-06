import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTimer } from '@/hooks/section13/useTimer';

const Page: NextPage = () => {
  const { second, isActive, handleClickToggle, handleClickReset } = useTimer();

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
