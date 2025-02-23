import { Box, Link, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box p={6} justifyContent={'center'} alignItems={'center'} as="footer">
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align="center"
      >
        <Text fontSize="sm" fontWeight="normal" textAlign="center">
          &copy; {new Date().getFullYear()} WatchWise. All rights reserved.
        </Text>

        <Stack
          gap={4}
          justifyContent={'center'}
          alignItems={'center'}
          direction="row"
        >
          <Link
            target="_blank"
            href="https://github.com/Michael734999/watch-wise"
          >
            <FaGithub size={'24'} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/michael-moore-133a381b9/"
          >
            <FaLinkedin size={'24'} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
