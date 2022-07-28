import type { FC } from 'react';
import { NavLink } from '../atoms/NavLink';
import Styles from '/src/exercise1/organisms/styles/navLinkList.module.scss';

const navLinkNames = ['Home', '事業内容', '商品紹介', '会社概要', '採用情報', 'お問い合わせ'];
export const NavLinkList: FC = () => (
  <div className={Styles.navLinkList}>
    {navLinkNames.map((name) => (
      <NavLink key={`navlink-${name}`} href={`#${name}`} isActive={name === 'Home'}>
        {name}
      </NavLink>
    ))}
  </div>
);
