import { Stack, Image } from '@chakra-ui/react';
import popcornLoading from '@assets/popcorn.gif';

export const Loading = () => {
  return (
    <Stack
      width="100%"
      minHeight="55vh"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Image src={popcornLoading} boxSize="160px" fit="cover" alt="Popcorn" />
    </Stack>
  );
};
