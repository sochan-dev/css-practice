import classNames from 'classnames';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import Styles from '/src/exercise1/atoms/styles/navLink.module.scss';

interface Props {
  children: ReactNode;
  href: string;
  isActive: boolean;
}

export const NavLink: FC<Props> = (props) => {
  const { children, href, isActive } = props;

  return (
    <li className={classNames(Styles.navLink, { [Styles.navLink_active]: isActive })}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
