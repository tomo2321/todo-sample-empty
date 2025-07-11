import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/section7/useDisplayFeedback';

const Page: NextPage = () => {
  const { inputValue, feedbackList, handleInputChange, handleSubmit, handleReset } =
    useDisplayFeedback();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="Input your feedback..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="mt-4 flex justify-center gap-2">
            <Button onClick={handleSubmit} label="Submit" variant="primary" />
            <Button onClick={handleReset} label="Reset" variant="secondary" />
          </div>
          <div className="mt-2">
            {feedbackList.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
