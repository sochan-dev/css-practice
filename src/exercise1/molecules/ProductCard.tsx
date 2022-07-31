import type { FC } from 'react';
import { IconText } from '../atoms/IconText';
import { Thumbnail } from '../atoms/Thumbnail';
import Styles from '/src/exercise1/molecules/styles/productCard.module.scss';

interface Props {
  thumbnailSrc: string;
  title: string;
}

export const ProductCard: FC<Props> = (props) => {
  const { thumbnailSrc, title } = props;

  return (
    <div className={Styles.productCard}>
      <div className={Styles.productCard__thumbnail}>
        <Thumbnail src={thumbnailSrc} alt="product" />
      </div>
      <div className={Styles.productCard__title}>
        <IconText>{title}</IconText>
      </div>
    </div>
  );
};
