import classNames from 'classnames';
import type { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import Styles from '/src/exercise3/atoms/styles/simpleTextArea.module.scss';

interface Props {
  attribute: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  overrideStyles?: {
    readonly [key: string]: string;
  };
}

export const SimpleTextArea: FC<Props> = (props) => {
  const { attribute, overrideStyles } = props;
  return <textarea className={classNames(Styles.simpleTextArea, overrideStyles)} {...attribute} />;
};
