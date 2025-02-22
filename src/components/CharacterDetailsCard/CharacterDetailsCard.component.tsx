import { Card, Heading } from '@chakra-ui/react';
import { DataList } from '@components/DataList';
import { CharacterDetailsCardProps } from './CharacterDetailsCard.types';

export const CharacterDetailsCard = ({
  character,
}: CharacterDetailsCardProps) => {
  return (
    <Card.Root width="90%" my="8" p={2}>
      <Card.Header>
        <Card.Title fontSize={'2xl'}>{character.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <DataList
          data={[
            { label: 'Birth year', value: character.birth_year },
            { label: 'Eye Color', value: character.eye_color },
            { label: 'Gender', value: character.gender },
            { label: 'Hair Color', value: character.hair_color },
            { label: 'Height', value: `${character.height} cm` },
            { label: 'Home World', value: character.homeworld.gravity },
            { label: 'Mass', value: `${character.mass} kg` },
            {
              label: 'Species',
              value:
                character.species.length !== 0
                  ? character.species[0].name
                  : 'N/A',
            },
            { label: 'Skin Color', value: character.skin_color },
          ]}
        />
        <Heading textTransform={'uppercase'} my={8}>
          Home World details
        </Heading>
        <DataList
          data={[
            { label: 'Name', value: character.homeworld.name },
            { label: 'Climate', value: character.homeworld.climate },
            { label: 'Gravity', value: character.homeworld.gravity },
            { label: 'Terrain', value: character.homeworld.terrain },
            {
              label: 'Orbital Period',
              value: `${character.homeworld.orbital_period} days`,
            },
            { label: 'Population', value: character.homeworld.population },
            {
              label: 'Rotation Period',
              value: `${character.homeworld.rotation_period} hours`,
            },
          ]}
        />
      </Card.Body>
    </Card.Root>
  );
};
