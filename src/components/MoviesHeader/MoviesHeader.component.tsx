import { Button, Flex, Heading } from '@chakra-ui/react';
import { FilterOptions } from '@pages/Movies/Movies.types';
import { MoviesHeaderProps } from './MoviesHeader.types';

export const MoviesHeader = ({
  filterOption,
  setFilterOption,
  setPageNumber,
}: MoviesHeaderProps) => {
  const handleOnClick = (option: FilterOptions) => {
    setFilterOption(option);
    setPageNumber(1);
  };

  return (
    <Flex width={'96%'} mt={'8'} alignItems={'center'} gap={6}>
      <Heading textTransform={'uppercase'} size={'2xl'}>
        Movies
      </Heading>
      <Flex alignItems={'center'}>
        <Button
          bg={filterOption === FilterOptions.POPULARITY ? '#ff848c' : '#ececec'}
          _light={{ color: 'black' }}
          fontWeight={'semibold'}
          borderLeftRadius={'full'}
          onClick={() => handleOnClick(FilterOptions.POPULARITY)}
          borderRightRadius={'none'}
        >
          Most popular
        </Button>
        <Button
          bg={
            filterOption === FilterOptions.VOTE_AVERAGE ? '#ff848c' : '#ececec'
          }
          _light={{ color: 'black' }}
          onClick={() => handleOnClick(FilterOptions.VOTE_AVERAGE)}
          fontWeight={'semibold'}
          borderRightRadius={'full'}
          borderLeftRadius={'none'}
        >
          Highly rated
        </Button>
      </Flex>
    </Flex>
  );
};
