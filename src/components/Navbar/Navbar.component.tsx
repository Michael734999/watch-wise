import { Flex, HStack, IconButton, ListRoot } from '@chakra-ui/react';
import { ColorModeButton } from '@components/ColorModeButton';
import { Logo } from '@components/Logo';
import { NavLink } from '@components/NavLink';
import { FaSearch } from 'react-icons/fa';
import { NavLink as Link } from 'react-router';

const Links = [
  { href: '/', title: 'Star Wars', key: 1324 },
  { href: '/movies', title: 'Movies', key: 6433 },
];

export const Navbar = () => {
  return (
    <HStack
      position="sticky"
      top="0"
      bg="rgba(27, 27, 27, 0.63);"
      p="4"
      shadow={'xl'}
      justifyContent="space-between"
      alignItems={'center'}
      zIndex="10"
      textAlign={'center'}
    >
      <Flex alignItems={'center'} gap="2">
        <Logo />
        <ListRoot ml={'2'} display={'flex'} flexDirection={'row'}>
          {Links.map((item) => (
            <NavLink key={item.key} label={item.title} linkTo={item.href} />
          ))}
        </ListRoot>
      </Flex>

      <Flex alignItems={'center'} gap="2">
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
  );
};
