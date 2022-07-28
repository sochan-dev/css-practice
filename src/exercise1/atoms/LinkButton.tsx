import classnames from 'classnames';
import type { FC } from 'react';
import Styles from '/src/exercise1/atoms/styles/linkButton.module.scss';

interface Props {
  type: 'primary' | 'secondary';
  size: 'm' | 'l';
  txt: string;
  href: string;
}

export const LinkButton: FC<Props> = ({ type = 'primary', size = 'm', txt, href }) => (
  <a href={href} className={classnames(Styles[type], Styles[`linkButton_${size}`])}>
    {txt}
  </a>
);
