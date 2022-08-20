import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/radio.module.scss';

interface Props {
  value: string | number;
  label: string;
  name: string;
  id: string;
  checked?: boolean;
}

export const Radio: FC<Props> = (props) => {
  const { value, label, name, id, checked } = props;

  return (
    <div className={Styles.radio}>
      <input type="radio" name={name} value={value} checked={checked} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
