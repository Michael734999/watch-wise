import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useMovieDetails } from './useMovieDetails.hooks';
import { Params, useParams } from 'react-router';
import { VideoIframe } from '@components/VideoIframe';
import { MovieDetailsSection } from '@components/MovieDetails';
import { Loading } from '@components/Loading';
import { Error } from '@components/Error';

export const MovieDetails = () => {
  const { id } = useParams<Params<string>>();
  const { movieDetails, trailerVideo, loading, error } = useMovieDetails(id!);

  if (error) return <Error />;

  if (loading || !movieDetails) return <Loading />;

  return (
    <Flex
      height={'100%'}
      width={'100%'}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <MovieDetailsSection movieDetails={movieDetails} />
      <Box
        width={'95%'}
        textAlign={'start'}
        alignItems={'start'}
        justifyContent={'start'}
      >
        <Heading py={4} fontSize={'2xl'}>
          Trailers for {movieDetails?.title}
        </Heading>
        {trailerVideo && (
          <Container mt={4}>
            <VideoIframe id={trailerVideo?.key} />
            <Flex mt="5" mb="10" overflowX={'scroll'} gap={'5'}>
              {movieDetails?.trailers?.map((item) => (
                <Box key={item?.id} minW={'290px'}>
                  <VideoIframe id={item?.key} isSmall />
                  <Text fontSize={'sm'} fontWeight={'bold'} mt="2" maxLines={2}>
                    {item?.name}{' '}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Container>
        )}
      </Box>
    </Flex>
  );
};
