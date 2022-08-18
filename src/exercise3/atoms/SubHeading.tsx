import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/subHeading.module.scss';

interface Props {
  txt: string;
}

export const SubHeading: FC<Props> = (props) => {
  const { txt } = props;
  return <p className={Styles.subHeading}>{txt}</p>;
};
