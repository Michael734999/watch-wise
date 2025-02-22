import { VideoIframeProps } from './VideoIframe.types';

export const VideoIframe = ({ id, isSmall }: VideoIframeProps) => {
  return (
    <iframe
      width="100%"
      height={isSmall ? '150' : '500'}
      src={`https://www.youtube.com/embed/${id}`}
      title="Youtube"
      allowFullScreen
    ></iframe>
  );
};
