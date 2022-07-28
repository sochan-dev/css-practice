import type { FC, ReactNode } from 'react';
import Styles from '/src/exercise1/atoms/styles/headingText.module.scss';

interface Props {
  children: ReactNode;
}

export const HeadingText: FC<Props> = (props) => {
  const { children } = props;
  return <p className={Styles.headingText}>{children}</p>;
};
