import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { HamburgerButton } from '../atoms/HamburgerButton';
import { Logo } from '../atoms/Logo';
import { NavLinkList } from './NavLinkList';
import type { Nav } from './NavLinkList';
import Styles from '/src/exercise1/organisms/styles/header.module.scss';

const navList: Nav[] = [
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

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerButton = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className={Styles.header}>
      <h1 className={Styles.header__logo}>
        <Logo />
      </h1>
      <nav className={isOpen ? Styles.header__nav_active : Styles.header__nav}>
        <NavLinkList navList={navList} activeId={1} />
      </nav>
      <div className={Styles.header__hamburger}>
        <HamburgerButton isActive={isOpen} onClick={handleHamburgerButton} />
      </div>
    </header>
  );
};
