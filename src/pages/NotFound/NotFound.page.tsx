import { Flex, Heading, Image } from '@chakra-ui/react';
import errorIcon from '@assets/error.gif';

export const NotFound = () => {
  return (
    <Flex
      width="100%"
      height="80vh"
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'6'}
    >
      <Image src={errorIcon} boxSize="180px" fit="cover" alt="Not Found" />
      <Heading size={'2xl'}>Page not Found!</Heading>
    </Flex>
  );
};
