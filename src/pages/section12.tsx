import { NextPage } from 'next';

import { useChangeDisplayItem } from '@/hooks/section12/useChangeDisplayItem';

const LIGHT_COLOR_CYCLE_LIST = [
  'bg-red-600',
  'bg-yellow-600',
  'bg-green-600',
  'bg-blue-600',
  'bg-purple-600',
  'bg-pink-600',
  'bg-indigo-600',
];

const NUM_DISPLAY_LIGTHS = 5;

const Page: NextPage = () => {
  const { itemIndex, displayPositionIndex } = useChangeDisplayItem(
    LIGHT_COLOR_CYCLE_LIST,
    NUM_DISPLAY_LIGTHS,
  );

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        {Array.from({ length: NUM_DISPLAY_LIGTHS }).map((_, index) => (
          <div
            key={index}
            className={`size-12 rounded-full ${index === displayPositionIndex ? LIGHT_COLOR_CYCLE_LIST[itemIndex] : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
