import React, { useState } from 'react';
import { VideoIframeProps } from './VideoIframe.types';
import { Box, IconButton } from '@chakra-ui/react';
import { IoPlayCircleOutline } from 'react-icons/io5';

const VideoIframeComponent = ({ id, isSmall }: VideoIframeProps) => {
  const [isIframeVisible, setIframeVisible] = useState(false);

  const handlePlayClick = () => {
    setIframeVisible(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const height = isSmall ? '150px' : '500px';

  return (
    <Box position="relative" width="100%" height={height}>
      {!isIframeVisible ? (
        <Box
          bgImage={`url(${thumbnailUrl})`}
          bgSize="cover"
          backgroundPosition="center"
          cursor="pointer"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handlePlayClick}
        >
          <IconButton
            aria-label="Play Video"
            color="white"
            size="2xl"
            variant="plain"
            _hover={{ opacity: 0.8 }}
            position="absolute"
            zIndex={1}
          >
            <IoPlayCircleOutline />
          </IconButton>
        </Box>
      ) : (
        <iframe
          width="100%"
          height={height}
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video"
          allowFullScreen
          loading="lazy"
        />
      )}
    </Box>
  );
};

export const VideoIframe = React.memo(VideoIframeComponent);
