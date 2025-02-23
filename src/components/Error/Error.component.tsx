import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import errorIcon from '@assets/error.gif';

export const Error = () => {
  return (
    <Flex
      width="100%"
      minHeight="55vh"
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'6'}
    >
      <Image src={errorIcon} boxSize="150px" fit="cover" alt="Error" />
      <Heading size={'2xl'}>Something went wrong!</Heading>
      <Button onClick={() => window.location.reload()}>Refresh page</Button>
    </Flex>
  );
};
