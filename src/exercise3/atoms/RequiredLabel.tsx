import type { FC } from 'react';
import Styles from '/src/exercise3/atoms/styles/requiredLabel.module.scss';

export const RequiredLabel: FC = () => (
  <div className={Styles.requiredLabel}>
    <span>必須</span>
  </div>
);
