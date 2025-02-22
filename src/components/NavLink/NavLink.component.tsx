import { NavLink as Link } from 'react-router';
import { NavLinkProps } from './NavLink.types';
import { Flex } from '@chakra-ui/react';

export const NavLink = ({ label, linkTo }: NavLinkProps) => {
  return (
    <Flex
      fontSize={15}
      color={'#9F9F9F'}
      mx={{ lg: 4, md: 2 }}
      fontWeight={'semibold'}
    >
      <Link
        to={linkTo}
        style={({ isActive }) => ({
          color: isActive ? '#F7F7F7' : '#9F9F9F',
          fontWeight: isActive ? 'bold' : 'semibold',
          textDecoration: 'none',
        })}
      >
        {label}
      </Link>
    </Flex>
  );
};
