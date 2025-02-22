import { Heading } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Heading
      fontWeight={'black'}
      letterSpacing={'widest'}
      color={'#AB001A'}
      size={{ base: 'xl', md: '2xl' }}
      textTransform={'uppercase'}
    >
      Watchwise
    </Heading>
  );
};
