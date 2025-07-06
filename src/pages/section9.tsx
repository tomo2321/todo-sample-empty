import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useQuiz from '@/hooks/section9/useQuiz';

const QUESTION = 'What is React?';
const CHOICE_LIST = [
  'A JavaScript library for building user interfaces',
  'A framework for server-side rendering',
  'A programming language',
  'A database management system',
];
const ANSWER = 'A JavaScript library for building user interfaces';

const Page: NextPage = () => {
  const { selectedChoice, result, handleChoice, handleSubmit } = useQuiz(ANSWER);

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {CHOICE_LIST.map((choice, index) => (
              <Button
                key={index}
                label={choice}
                onClick={() => handleChoice(choice)}
                variant="secondary"
                className={`${selectedChoice === choice && 'bg-blue-500 text-white'}`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Button onClick={handleSubmit} label="Submit" variant="primary" />
          </div>

          <h3 className="mt-8 text-center text-4xl">{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
