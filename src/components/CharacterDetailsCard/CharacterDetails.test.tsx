import { render, screen } from '@testing-library/react';
import { CharacterDetailsCard } from './CharacterDetailsCard.component';
import { ChakraUIProvider } from '@providers/ChakraProvider';
import { CharactersResponse } from '@services/api/starwars/api.types';
import { CharacterDetailsCardProps } from './CharacterDetailsCard.types';

describe('CharacterDetailsCard', () => {
  const mockCharacter = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    eye_color: 'Blue',
    gender: 'Male',
    hair_color: 'Blond',
    height: 172,
    mass: 77,
    skin_color: 'Fair',
    homeworld: {
      name: 'Tatooine',
      climate: 'Arid',
      gravity: '1',
      terrain: 'Desert',
      orbital_period: 304,
      population: '200000',
      rotation_period: 23,
    },
    species: [{ name: 'Human' }],
  } as unknown as CharactersResponse;

  const Component = ({ character }: CharacterDetailsCardProps) => {
    return (
      <ChakraUIProvider>
        <CharacterDetailsCard character={character} />
      </ChakraUIProvider>
    );
  };

  it('should render character details correctly', () => {
    render(<Component character={mockCharacter} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Birth year')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
    expect(screen.getByText('Eye Color')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Hair Color')).toBeInTheDocument();
    expect(screen.getByText('Blond')).toBeInTheDocument();
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('172 cm')).toBeInTheDocument();
    expect(screen.getByText('Mass')).toBeInTheDocument();
    expect(screen.getByText('77 kg')).toBeInTheDocument();
    expect(screen.getByText('Skin Color')).toBeInTheDocument();
    expect(screen.getByText('Fair')).toBeInTheDocument();
    expect(screen.getByText('Species')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
  });

  it('should render homeworld details correctly', () => {
    render(<Component character={mockCharacter} />);

    expect(screen.getByText('Home World details')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Arid')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Desert')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('304 days')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('200000')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('23 hours')).toBeInTheDocument();
  });

  it('should handle empty species list and render "N/A"', () => {
    const characterWithoutSpecies = {
      ...mockCharacter,
      species: [],
    };

    render(<Component character={characterWithoutSpecies} />);

    expect(screen.getByText('Species')).toBeInTheDocument();
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  it('should handle missing homeworld data gracefully', () => {
    const characterWithoutHomeworld = {
      ...mockCharacter,
      homeworld: {
        name: '',
        climate: '',
        gravity: '',
        terrain: '',
        orbital_period: 0,
        population: '',
        rotation_period: 0,
      },
    } as unknown as CharactersResponse;

    render(<Component character={characterWithoutHomeworld} />);

    expect(screen.getByText('Home World details')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('should render default values when homeworld or character data is missing', () => {
    const characterWithIncompleteData = {
      ...mockCharacter,
      height: undefined,
      mass: undefined,
      skin_color: undefined,
    } as unknown as CharactersResponse;

    render(<Component character={characterWithIncompleteData} />);

    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('Mass')).toBeInTheDocument();
    expect(screen.getByText('Skin Color')).toBeInTheDocument();
  });
});
