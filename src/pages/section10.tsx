import { NextPage } from 'next';

import { useDigitalClock } from '@/hooks/section10/useDigitalClock';

const Page: NextPage = () => {
  const { currentTime } = useDigitalClock();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{currentTime}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
