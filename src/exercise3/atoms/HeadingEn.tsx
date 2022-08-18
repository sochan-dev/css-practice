import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/headingEn.module.scss';

interface Props {
  txt: string;
}

export const HeadingEn: FC<Props> = (props) => {
  const { txt } = props;
  return <p className={Styles.headingEn}>{txt}</p>;
};
