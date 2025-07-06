import { NextPage } from 'next';
import { useEffect, useState } from 'react';

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
  const [lightColorIndex, setLightColorIndex] = useState(0);
  const [targetRoundIndex, setTargetRoundIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLightColorIndex((prevState) =>
        prevState !== LIGHT_COLOR_CYCLE_LIST.length - 1 ? prevState + 1 : 0,
      );
      setTargetRoundIndex((prevState) =>
        prevState !== NUM_DISPLAY_LIGTHS - 1 ? prevState + 1 : 0,
      );
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [lightColorIndex]);

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        {Array.from({ length: NUM_DISPLAY_LIGTHS }).map((_, index) => (
          <div
            key={index}
            className={`size-12 rounded-full ${index === targetRoundIndex ? LIGHT_COLOR_CYCLE_LIST[lightColorIndex] : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
