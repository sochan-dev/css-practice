import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/errorMsg.module.scss';

interface Props {
  msg: string;
}

export const ErrorMsg: FC<Props> = (props) => {
  const { msg } = props;

  return <p className={Styles.errorMsg}>{msg}</p>;
};
