import { NextPage } from 'next';

import { useRandomText } from '@/hooks/section11/useRandomText';

const QUOTE_LIST = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer',
  'Life is what happens when you’re busy making other plans. - John Lennon',
  'The purpose of our lives is to be happy. - Dalai Lama',
  'Get busy living or get busy dying. - Stephen King',
  'You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy',
  'Believe you can and you’re halfway there. - Theodore Roosevelt',
  'The best way to predict the future is to create it. - Peter Drucker',
  'You miss 100% of the shots you don’t take. - Wayne Gretzky',
  'Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs',
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  'Act as if what you do makes a difference. It does. - William James',
  'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
  'Opportunities don’t happen, you create them. - Chris Grosser',
  'Don’t watch the clock; do what it does. Keep going. - Sam Levenson',
  'You can’t build a reputation on what you are going to do. - Henry Ford',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'Everything you’ve ever wanted is on the other side of  fear. - George Addair',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill',
  'What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson',
  'The only impossible journey is the one you never begin. - Tony Robbins',
  'The best revenge is massive success. - Frank Sinatra',
  'Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs',
  'The way to get started is to quit talking and begin doing. - Walt Disney',
  'If you can dream it, you can do it. - Walt Disney',
  'The only place where success comes before work is in the dictionary. - Vidal Sassoon',
  'Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill',
];

const Page: NextPage = () => {
  const { text } = useRandomText(QUOTE_LIST);

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
