import type { FC } from 'react';
import { Thumbnail } from '../atoms/Thumbnail';
import Styles from '/src/exercise1/organisms/styles/mainVisual.module.scss';

export const MainVisual: FC = () => (
  <div className={Styles.container}>
    <div className={Styles.mainVisual}>
      <p className={Styles.mainVisual__catchCopy}>
        キャッチコピーの
        <br />
        文章が入りますキャッチコピーの文章が入ります
      </p>
      <div className={Styles.mainVisual__illust}>
        <Thumbnail src="/img/mv_illust.svg" alt="メインビジュアル" />
      </div>
    </div>
  </div>
);
