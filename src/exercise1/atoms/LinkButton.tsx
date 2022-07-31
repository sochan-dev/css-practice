import classnames from 'classnames';
import type { FC, ReactNode } from 'react';
import Styles from '/src/exercise1/atoms/styles/linkButton.module.scss';

interface Props {
  type: 'primary' | 'secondary';
  size: 'm' | 'l';
  href: string;
  children: ReactNode;
}

export const LinkButton: FC<Props> = ({ type = 'primary', size = 'm', href, children }) => (
  <a href={href} className={classnames(Styles[type], Styles[`linkButton_${size}`])}>
    {children}
  </a>
);
