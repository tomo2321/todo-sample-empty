import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from '@/components/common/parts/Button';

type Character = {
  name: string;
  height: string;
  mass: string;
  bornLocation: string;
  diedLocation: string;
  gender: string;
  image: string;
};

const Page: NextPage = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`);
      const data = (await response.json()) as Character;
      setCharacter(data);
    };

    void fetchCharacter();
  }, [id]);

  const handleNextCharacter = () => {
    setId((prevState) => prevState + 1);
  };

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
