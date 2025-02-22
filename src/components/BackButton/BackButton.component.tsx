import { Container, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { RiArrowLeftFill } from 'react-icons/ri';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => void navigate(-1)}
      cursor={'pointer'}
      width={'90%'}
      p={0}
      mt={6}
    >
      <HStack
        _hover={{ fontWeight: 'semibold' }}
        fontSize={'xl'}
        justifyContent={'start'}
      >
        <RiArrowLeftFill />
        Back
      </HStack>
    </Container>
  );
};
