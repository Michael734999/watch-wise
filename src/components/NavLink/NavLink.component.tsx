import { NavLink as Link } from 'react-router';
import { NavLinkProps } from './NavLink.types';
import { Flex } from '@chakra-ui/react';

export const NavLink = ({ label, linkTo, handleOnClick }: NavLinkProps) => {
  return (
    <Flex
      fontSize={15}
      color={'#9F9F9F'}
      mx={{ lg: 4, md: 2 }}
      fontWeight={'semibold'}
    >
      <Link
        onClick={handleOnClick && handleOnClick}
        to={linkTo}
        style={({ isActive }) => ({
          color: isActive ? '#fefefe' : '#c0c0c0',
          fontWeight: isActive ? 'bold' : 'semibold',
          textDecoration: 'none',
        })}
      >
        {label}
      </Link>
    </Flex>
  );
};
