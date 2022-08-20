import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/button.module.scss';

interface Props {
  label: string;
}

export const Button: FC<Props> = (props) => {
  const { label } = props;

  return (
    <button className={Styles.button} type="submit">
      {label}
    </button>
  );
};
