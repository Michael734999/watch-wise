import { Flex } from '@chakra-ui/react';
import { useStarWarsDetails } from './useStarWarsDetails.hooks';
import { Params, useParams } from 'react-router';
import { BackButton } from '@components/BackButton';
import { StarWarsDetailsCard } from '@components/DetailsCard';

const StarWarsDetails = () => {
  const { id } = useParams<Params<string>>();
  const { movieDetails, loading } = useStarWarsDetails(id!);

  return (
    <Flex
      height={'100%'}
      direction="column"
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {!loading && <BackButton />}
      <StarWarsDetailsCard loading={loading} id={id} movieData={movieDetails} />
    </Flex>
  );
};

export default StarWarsDetails;
