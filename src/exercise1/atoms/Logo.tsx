import Image from 'next/image';
import type { FC } from 'react';
import Styles from '/src/exercise1/atoms/styles/logo.module.scss';

export const Logo: FC = () => (
  <div className={Styles.logo}>
    <Image src="/img/logo.svg" alt="logo" objectFit="contain" layout="fill" />
  </div>
);
