import type { FC } from 'react';
import { NavLink } from '../atoms/NavLink';
import Styles from '/src/exercise1/organisms/styles/footerNavLinkList.module.scss';

const navList = [
  {
    id: 1,
    name: 'サイトポリシー',
    href: 'サイトポリシー',
  },
  {
    id: 2,
    name: 'プライバシーポリシー',
    href: 'プライバシーポリシー',
  },
  {
    id: 3,
    name: 'サイトマップ',
    href: 'サイトマップ',
  },
];
export const FooterNavLinkList: FC = () => (
  <div className={Styles.footerNavLinkList}>
    {navList.map((nav) => (
      <NavLink key={nav.id} href={nav.href} isActive={false}>
        {nav.name}
      </NavLink>
    ))}
  </div>
);
