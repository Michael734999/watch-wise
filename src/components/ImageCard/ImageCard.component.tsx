import { Card, Image, Skeleton, Text } from '@chakra-ui/react';
import { POSTER_URL } from '@services/api/tmdb/api';
import { ImageCardProps } from './ImageCard.types';
import moment from 'moment';
import { useNavigate } from 'react-router';

export const ImageCard = ({
  title,
  posterUrl,
  movieId,
  loading,
  releaseDate,
}: ImageCardProps) => {
  const navigate = useNavigate();

  const handleNavigation = async (id: number) => {
    await navigate(`/movie/${id}`);
  };

  return (
    <Card.Root
      onClick={() => void handleNavigation(movieId)}
      cursor={'pointer'}
      border={'none'}
      _hover={{
        transform: 'scale(105%)',
        transition: 'transform 0.4s ease-in-out',
        '& .footer-overlay': {
          opacity: 1,
        },
      }}
      overflow="hidden"
      borderRadius={0}
    >
      <Skeleton loading={loading}>
        <Image src={POSTER_URL + posterUrl} alt={title} />
        <Card.Footer
          className="footer-overlay"
          bgColor={'rgba(85, 0, 0, 0.81)'}
          position={'absolute'}
          bottom={0}
          left={0}
          flexDirection={'column'}
          w={'100%'}
          opacity={0}
          h={'28%'}
          transition={'opacity 0.4s ease-in-out'}
          p={2}
        >
          <Text fontWeight={'semibold'}>{title}</Text>
          <Text fontSize={'sm'}>{moment(releaseDate).format('MMM yyyy')}</Text>
        </Card.Footer>
      </Skeleton>
    </Card.Root>
  );
};
