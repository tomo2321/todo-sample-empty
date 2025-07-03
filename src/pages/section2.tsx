import { NextPage } from 'next';

import ThreeBoxContent from '@/components/ThreeBoxContent';

const Page: NextPage = () => {
  const title = 'This is a Title.';
  const content =
    'This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.';
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <ThreeBoxContent
        title1={title}
        content1={content}
        title2={title}
        content2={content}
        title3={title}
        content3={content}
      />
    </div>
  );
};

export default Page;
