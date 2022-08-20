import type { FC } from 'react';
import { Heading } from '../atoms/Heading';
import { HeadingEn } from '../atoms/HeadingEn';
import Styles from '/src/exercise3/organisms/styles/mainVisual.module.scss';

export const MainVisual: FC = () => (
  <div className={Styles.mainVisual}>
    <h1 className={Styles.mainVisual__heading}>
      <div>
        <HeadingEn txt="contact" />
      </div>
      <div>
        <Heading txt="お問合わせ" />
      </div>
    </h1>
    <p>弊社の事業・商品へのご質問・お問い合わせ等は以下のフォームからご連絡してください。</p>
  </div>
);
