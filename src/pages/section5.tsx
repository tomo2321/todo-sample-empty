import { NextPage } from 'next';
import { useState } from 'react';

const initialText = 'Hello';

const Page: NextPage = () => {
  const [text, setText] = useState(initialText);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value || initialText);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-center text-6xl">{text}</h2>
          <div className="flex justify-center">
            <input onChange={handleChangeText} className="border px-3 py-2" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
