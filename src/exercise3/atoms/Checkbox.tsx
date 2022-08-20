import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/checkbox.module.scss';

interface Props {
  value: string | number;
  label: string;
  name: string;
  id: string;
  checked?: boolean;
}

export const Checkbox: FC<Props> = (props) => {
  const { value, label, name, id, checked } = props;

  return (
    <div className={Styles.checkbox}>
      <input type="checkbox" name={name} value={value} checked={checked} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
