import type { FC, ReactNode } from 'react';
import Styles from '/src/exercise1/atoms/styles/iconText.module.scss';

interface Props {
  children: ReactNode;
}

export const IconText: FC<Props> = (props) => {
  const { children } = props;
  return <p className={Styles.iconText}>{children}</p>;
};
