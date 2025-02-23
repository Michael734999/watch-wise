import {
  Flex,
  HStack,
  IconButton,
  ListRoot,
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ColorModeButton } from '@components/ColorModeButton';
import { Logo } from '@components/Logo';
import { NavLink } from '@components/NavLink';
import { FaSearch, FaHamburger } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { NavLink as Link } from 'react-router';

const Links = [
  { href: '/', title: 'Star Wars', key: 1324 },
  { href: '/movies', title: 'Movies', key: 6433 },
];

export const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      position="sticky"
      top="0"
      bg="rgba(27, 27, 27, 0.63);"
      p="4"
      shadow={'xl'}
      zIndex="10"
    >
      <HStack
        width={'100%'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <IconButton
          size={'md'}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={open ? onClose : onOpen}
        >
          {open ? <IoMdClose /> : <FaHamburger />}
        </IconButton>
        <Flex alignItems={'center'} gap="6">
          <Logo />
          <ListRoot
            display={{ base: 'none', md: 'flex' }}
            ml={'4'}
            gap={'4'}
            flexDirection={'row'}
          >
            {Links.map((item) => (
              <NavLink key={item.key} label={item.title} linkTo={item.href} />
            ))}
          </ListRoot>
        </Flex>

        <Flex alignItems={'center'} gap="3">
          <Link to="/search">
            <IconButton
              aria-label="search"
              color="white"
              _hover={{ bg: 'initial' }}
              variant={'ghost'}
              rounded={'full'}
              size="sm"
            >
              <FaSearch />
            </IconButton>
          </Link>
          <ColorModeButton _hover={{ bg: 'initial' }} />
        </Flex>
      </HStack>
      {open ? (
        <Flex py={2} width={'100%'} display={{ md: 'none' }}>
          <Stack
            textAlign={'center'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={4}
          >
            {Links.map((item) => (
              <NavLink
                key={item.key}
                label={item.title}
                linkTo={item.href}
                handleOnClick={() => onClose()}
              />
            ))}
          </Stack>
        </Flex>
      ) : null}
    </VStack>
  );
};
