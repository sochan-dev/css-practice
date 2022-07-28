import type { FC, MouseEvent } from 'react';
import Styles from '/src/exercise1/atoms/styles/hamburgerButton.module.scss';

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export const HamburgerButton: FC<Props> = (props) => {
  const { isActive, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={Styles.hamburger} onClick={() => onClick()}>
      <div className={!isActive ? Styles.hamburger__line : Styles.hamburger__line_active} />
    </div>
  );
};
