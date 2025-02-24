import { Box, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { RiArrowLeftFill } from 'react-icons/ri';
import { useCallback } from 'react';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(async () => {
    await navigate(-1);
  }, [navigate]);

  return (
    <Box
      onClick={() => void handleOnClick()}
      cursor={'pointer'}
      zIndex={10}
      justifyContent={'start'}
      width={'100%'}
      p={0}
      mt={4}
    >
      <HStack
        zIndex={10}
        _hover={{ fontWeight: 'semibold' }}
        fontSize={'xl'}
        justifyContent={'start'}
      >
        <RiArrowLeftFill />
        Back
      </HStack>
    </Box>
  );
};
