import { Flex } from '@chakra-ui/react';
import { BackButton } from '@components/BackButton';
import { CharacterDetailsCard } from '@components/CharacterDetailsCard';
import { CharactersResponse } from '@services/api/starwars/api.types';
import { useLocation } from 'react-router';

export const CharacterDetails = () => {
  const location = useLocation();
  const character = location.state as CharactersResponse;

  return (
    <Flex
      height={'100%'}
      direction="column"
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <BackButton />
      <CharacterDetailsCard character={character} />
    </Flex>
  );
};
