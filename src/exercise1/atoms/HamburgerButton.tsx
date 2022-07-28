import type { FC } from 'react';
import Styles from '/src/exercise1/atoms/styles/hamburgerButton.module.scss';

interface Props {
  isActive: boolean;
}

export const HamburgerButton: FC<Props> = (props) => {
  const { isActive } = props;
  return (
    <div className={Styles.hamburger}>
      <div className={!isActive ? Styles.hamburger__line : Styles.hamburger__line_active} />
    </div>
  );
};
