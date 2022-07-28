import Image, { ImageProps } from 'next/image';
import type { FC } from 'react';

export const Thumbnail: FC<ImageProps> = (props) => {
  const { ...styles } = props;
  return <Image {...styles} />;
};
