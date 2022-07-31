import type { FC } from 'react';
import { NavLinkList } from './NavLinkList';
import type { Nav } from './NavLinkList';
import Styles from '/src/exercise1/organisms/styles/footer.module.scss';

const navList: Nav[] = [
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

export const Footer: FC = () => (
  <footer className={Styles.footer}>
    <div className={Styles.footer__navList}>
      <NavLinkList navList={navList} activeId={0} />
    </div>
    <p lang="en" className={Styles.footer__copyright}>
      ©sample All Rights Reserved.
    </p>
  </footer>
);
