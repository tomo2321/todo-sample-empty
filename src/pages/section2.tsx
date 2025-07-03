import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-6 shadow-xl">
          <h3 className="text-xl font-bold">This is a Title.</h3>
          <p className="mt-4 text-base">
            This is a description. This is a description. This is a description. This is a
            description. This is a description. This is a description. This is a description. This
            is a description. This is a description. This is a description. This is a description.
            This is a description.
          </p>
        </div>

        <div className="p-6 shadow-xl">
          <h3 className="text-xl font-bold">This is a Title.</h3>
          <p className="mt-4 text-base">
            This is a description. This is a description. This is a description. This is a
            description. This is a description. This is a description. This is a description. This
            is a description. This is a description. This is a description. This is a description.
            This is a description.
          </p>
        </div>

        <div className="p-6 shadow-xl">
          <h3 className="text-xl font-bold">This is a Title.</h3>
          <p className="mt-4 text-base">
            This is a description. This is a description. This is a description. This is a
            description. This is a description. This is a description. This is a description. This
            is a description. This is a description. This is a description. This is a description.
            This is a description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
