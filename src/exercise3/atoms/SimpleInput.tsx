import classNames from 'classnames';
import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import Styles from '/src/exercise3/atoms/styles/simpleInput.module.scss';

interface Props {
  attribute: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  overrideStyles?: {
    readonly [key: string]: string;
  };
}

export const SimpleInput: FC<Props> = (props) => {
  const { attribute, overrideStyles } = props;
  return <input className={classNames(Styles.simpleInput, overrideStyles)} {...attribute} />;
};
