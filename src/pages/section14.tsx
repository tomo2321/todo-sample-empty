import { NextPage } from 'next';
import Image from 'next/image';

import Button from '@/components/common/parts/Button';
import { useStarWars } from '@/hooks/section14/useStarWars';

const Page: NextPage = () => {
  const { character, handleNextCharacter } = useStarWars();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {character ? (
            <div className="text-center text-base">
              <h2>{character.name}</h2>
              <Image src={character.image} alt="character image" width={300} height={300} />
              <p>Gender: {character.gender}</p>
              <p>Height: {character.height}</p>
              <p>Weight: {character.mass}</p>
              <p>Born Location: {character.bornLocation}</p>
              <p>Died Location: {character.diedLocation}</p>
            </div>
          ) : (
            <p className="text-center text-2xl">Loading...</p>
          )}

          <div className="flex justify-center">
            <Button
              onClick={handleNextCharacter}
              className="mt-4"
              label="Next Character"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
