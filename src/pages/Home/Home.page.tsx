import { Flex } from '@chakra-ui/react';
import { MovieTable } from '@components/MovieTable';
import { useMovieData } from './useMovieData.hooks';
import { Error } from '@components/Error';

export const Home = () => {
  const { moviesData, loading, error } = useMovieData();

  if (error) return <Error />;
  return (
    <Flex
      height={'100%'}
      width={'100%'}
      data-testid="flex-container"
      alignItems={'center'}
      justifyContent={'center'}
    >
      <MovieTable loading={loading} movies={moviesData} />
    </Flex>
  );
};
