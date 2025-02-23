import { Flex, For, HStack, SimpleGrid, Text, Stack } from '@chakra-ui/react';
import { ImageCard } from '@components/ImageCard';
import { SearchInput } from '@components/SearchInput';
import {
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@components/ui/pagination';
import { useMovieSearch } from './useMovieSearch.hooks';
import { Loading } from '@components/Loading';
import { Error } from '@components/Error';

export const MovieSearch = () => {
  const {
    loading,
    pageNumber,
    searchValue,
    setPageNumber,
    handleSearchChange,
    error,
    handleSubmit,
    searchData,
  } = useMovieSearch();

  if (error) return <Error />;

  return (
    <Flex
      height={'100%'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Stack width="90%" pt="10" mb={10} gap="5">
        <form onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Search by movie title"
            value={searchValue}
            onChange={handleSearchChange}
          />
          {!searchData || loading ? (
            <Loading />
          ) : searchData.results.length == 0 ? (
            <Text fontSize="lg" m={8} textAlign="center">
              No results available. Please update your search query.
            </Text>
          ) : (
            <Flex
              height={'100%'}
              width={'100%'}
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <SimpleGrid columns={[1, 2, 3, 4]} gap={5} width="96%" mt={8}>
                <For each={searchData.results}>
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
              </SimpleGrid>
              {searchData.results.length > 0 && (
                <PaginationRoot
                  my={6}
                  count={searchData.total_results}
                  pageSize={searchData.results.length}
                  page={pageNumber}
                  onPageChange={(e) => setPageNumber(e.page)}
                >
                  <HStack gap="4">
                    <PaginationPrevTrigger />
                    <PaginationPageText />
                    <PaginationNextTrigger />
                  </HStack>
                </PaginationRoot>
              )}
            </Flex>
          )}
        </form>
      </Stack>
    </Flex>
  );
};
