import type { FC } from 'react';
import { SubHeading } from '../atoms/SubHeading';
import Styles from '/src/exercise3/organisms/styles/contactInfo.module.scss';

export const ContactInfo: FC = () => (
  <div className={Styles.contactInfo}>
    <SubHeading txt="お問合わせについて" />
    <p className={Styles.contactInfo__info}>
      通常、3営業⽇以内に担当者よりご連絡差し上げます。
      <br />
      お急ぎの場合はお電話にてご連絡下さい。
      <br />
      （TEL: 00-0000-0000 平⽇9:00〜17:00）
    </p>
  </div>
);
