import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/heading.module.scss';

interface Props {
  txt: string;
}

export const Heading: FC<Props> = (props) => {
  const { txt } = props;

  return <p className={Styles.heading}>{txt}</p>;
};
