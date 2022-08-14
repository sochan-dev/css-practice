import type { FC } from 'react';
import { FooterNavLinkList } from '../../exercise1/organisms/FooterNavLinkList';
import Styles from '/src/exercise1/organisms/styles/footer.module.scss';

export const Footer: FC = () => (
  <footer className={Styles.footer}>
    <div className={Styles.footer__navList}>
      <FooterNavLinkList />
    </div>
    <p lang="en" className={Styles.footer__copyright}>
      ©sample All Rights Reserved.
    </p>
  </footer>
);
