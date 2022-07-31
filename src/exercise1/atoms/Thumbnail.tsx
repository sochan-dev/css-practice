import Image, { ImageProps } from 'next/image';
import type { FC } from 'react';
import Styles from '/src/exercise1/atoms/styles/thumbnail.module.scss';

interface Props {
  src: string;
  alt: string;
}

export const Thumbnail: FC<Props> = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};
