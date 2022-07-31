import type { FC } from 'react';
import { NavLink } from '../atoms/NavLink';
import Styles from '/src/exercise1/organisms/styles/navLinkList.module.scss';

export type Nav = {
  id: string | number;
  name: string;
  href: string;
};
interface Props {
  navList: Nav[];
  activeId: Nav['id'];
}

export const NavLinkList: FC<Props> = (props) => {
  const { navList, activeId } = props;
  return (
    <div className={Styles.navLinkList}>
      {navList.map((nav) => (
        <NavLink key={`navlink-${nav.id}`} href={`#${nav.href}`} isActive={nav.id === activeId}>
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
};
