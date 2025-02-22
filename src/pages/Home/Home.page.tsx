import { Flex } from '@chakra-ui/react';
import { MovieTable } from '@components/MovieTable';
import { useMovieData } from './useMovieData.hooks';

export const Home = () => {
  const { moviesData, loading } = useMovieData();
  return (
    <Flex
      height={'100%'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <MovieTable loading={loading} movies={moviesData} />
    </Flex>
  );
};
