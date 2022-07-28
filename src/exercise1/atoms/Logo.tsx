import Image from 'next/image';
import type { FC } from 'react';

export const Logo: FC = () => <Image src="/img/logo.svg" alt="logo" objectFit="contain" layout="fill" />;
