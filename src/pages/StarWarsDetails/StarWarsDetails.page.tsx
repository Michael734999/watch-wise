import { Flex, Stack } from '@chakra-ui/react';
import { useStarWarsDetails } from './useStarWarsDetails.hooks';
import { Params, useParams } from 'react-router';
import { BackButton } from '@components/BackButton';
import { StarWarsDetailsCard } from '@components/DetailsCard';
import { Error } from '@components/Error';

const StarWarsDetails = () => {
  const { id } = useParams<Params<string>>();
  const { movieDetails, loading, error } = useStarWarsDetails(id!);

  if (error) return <Error />;

  return (
    <Flex
      height={'100%'}
      direction="column"
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {!loading && (
        <Stack w="90%">
          <BackButton />
        </Stack>
      )}
      <StarWarsDetailsCard loading={loading} id={id} movieData={movieDetails} />
    </Flex>
  );
};

export default StarWarsDetails;
