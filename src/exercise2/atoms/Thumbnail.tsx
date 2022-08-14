import type { FC } from 'react';

interface Props {
  src: string;
  alt: string;
}

export const Thumbnail: FC<Props> = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};
