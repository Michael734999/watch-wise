import {
  Badge,
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Separator,
} from '@chakra-ui/react';
import { POSTER_URL } from '@services/api/tmdb/api';
import moment from 'moment';
import { MovieDetailsProps } from './MovieDetails.types';
import { BackButton } from '@components/BackButton';

export const MovieDetailsSection = ({ movieDetails }: MovieDetailsProps) => {
  return (
    <Box
      width={'100%'}
      height={{ base: 'auto', md: '550px' }}
      py={'4'}
      background={`linear-gradient(rgba(34, 33, 33, 0.88), rgba(0, 0, 0, 0.88)), url(${POSTER_URL}/${movieDetails?.backdrop_path})`}
      _light={{
        background: `linear-gradient(rgba(202, 200, 200, 0.88), rgba(156, 156, 156, 0.88)), url(${POSTER_URL}/${movieDetails?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      backgroundRepeat={'no-repeat'}
      display={'flex'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      alignItems={'center'}
    >
      <Container maxW={'container.xl'}>
        <Flex zIndex={10} mb={4}>
          <BackButton />
        </Flex>
        <Flex
          alignItems={'center'}
          gap="10"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Image
            height={'450px'}
            borderRadius={'sm'}
            src={POSTER_URL + movieDetails?.poster_path}
          />
          <Box>
            <Heading py={4} fontSize={'3xl'}>
              {movieDetails?.title}
            </Heading>

            <Flex alignItems={'center'} gap={'4'} mt={1} mb={5}>
              <Flex alignItems={'center'}>
                <Text fontSize={'sm'}>
                  {moment(movieDetails?.release_date).format('d MMM yyyy')}
                </Text>
              </Flex>
              <Separator size={'lg'} orientation="vertical" height="4" />
              <Flex alignItems={'center'}>
                <Text fontSize={'sm'}>{movieDetails?.runtime} min</Text>
              </Flex>
            </Flex>
            <Text
              color={'gray.400'}
              fontSize={'sm'}
              fontStyle={'italic'}
              my="5"
            >
              {movieDetails?.tagline}
            </Text>
            <Heading fontSize={'xl'} mb={'3'}>
              Overview
            </Heading>
            <Text fontSize={'md'} mb={'3'}>
              {movieDetails?.overview}
            </Text>
            <Flex mt="6" gap="2">
              {movieDetails?.genres?.map((genre) => (
                <Badge key={genre?.id} p="1">
                  {genre?.name}
                </Badge>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
