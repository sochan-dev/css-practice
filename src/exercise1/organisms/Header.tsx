import classNames from 'classnames';
import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { HamburgerButton } from '../atoms/HamburgerButton';
import { Logo } from '../atoms/Logo';
import { NavLinkList } from './NavLinkList';
import Styles from '/src/exercise1/organisms/styles/header.module.scss';

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
        <NavLinkList />
      </nav>
      <div className={Styles.header__hamburger}>
        <HamburgerButton isActive={isOpen} onClick={handleHamburgerButton} />
      </div>
    </header>
  );
};
