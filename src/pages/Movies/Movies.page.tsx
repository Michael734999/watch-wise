import { Flex, For, HStack, SimpleGrid } from '@chakra-ui/react';
import { ImageCard } from '@components/ImageCard';
import { useMovies } from './useMovies.hooks';
import { MoviesHeader } from '@components/MoviesHeader';
import {
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@components/ui/pagination';
import { Loading } from '@components/Loading';
import { Error } from '@components/Error';

export const Movies = () => {
  const {
    movies,
    loading,
    filterOption,
    error,
    setFilterOption,
    pageNumber,
    setPageNumber,
  } = useMovies();

  if (error) return <Error />;

  if (!movies || loading) return <Loading />;

  return (
    <Flex
      height={'100%'}
      width={'100%'}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <MoviesHeader
        setPageNumber={setPageNumber}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <SimpleGrid columns={[2, 3, 4]} gap={5} width="96%" mt={8}>
        {movies && (
          <For each={movies.results}>
            {(item) => (
              <ImageCard
                movieId={item.id}
                loading={loading}
                releaseDate={item.release_date}
                title={item.title}
                posterUrl={item.poster_path}
                key={item.id}
              />
            )}
          </For>
        )}
      </SimpleGrid>
      <PaginationRoot
        my={6}
        count={movies.total_results}
        pageSize={movies.results.length}
        page={pageNumber}
        onPageChange={(e) => setPageNumber(e.page)}
      >
        <HStack gap="4">
          <PaginationPrevTrigger />
          <PaginationPageText />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Flex>
  );
};
