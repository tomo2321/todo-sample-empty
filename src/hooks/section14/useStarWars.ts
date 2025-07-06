import { useEffect, useState } from 'react';

type Character = {
  name: string;
  height: string;
  mass: string;
  bornLocation: string;
  diedLocation: string;
  gender: string;
  image: string;
};

type UseStarWars = () => {
  character: Character | null;
  handleNextCharacter: () => void;
};

export const useStarWars: UseStarWars = () => {
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

  return {
    character,
    handleNextCharacter,
  };
};
