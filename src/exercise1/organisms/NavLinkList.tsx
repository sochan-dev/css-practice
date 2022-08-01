import type { FC } from 'react';
import { NavLink } from '../atoms/NavLink';
import classNames from 'classnames';
import Styles from '/src/exercise1/organisms/styles/navLinkList.module.scss';

const navList = [
  {
    id: 1,
    name: 'Home',
    href: 'Home',
  },
  {
    id: 2,
    name: '事業内容',
    href: '事業内容',
  },
  {
    id: 3,
    name: '商品紹介',
    href: '商品紹介',
  },
  {
    id: 4,
    name: '会社概要',
    href: '会社概要',
  },
  {
    id: 5,
    name: '採用情報',
    href: '採用情報',
  },
  {
    id: 6,
    name: 'お問い合わせ',
    href: 'お問い合わせ',
  },
];

export const NavLinkList: FC = () => (
  <div className={Styles.navLinkList}>
    {navList.map((nav) => (
      <NavLink key={`navlink-${nav.id}`} href={`#${nav.href}`} isActive={nav.id === 1}>
        {nav.name}
      </NavLink>
    ))}
  </div>
);
