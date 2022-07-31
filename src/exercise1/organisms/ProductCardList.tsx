import type { FC } from 'react';
import { ProductCard } from '../molecules/ProductCard';
import Styles from '/src/exercise1/organisms/styles/productCardList.module.scss';

type Product = {
  id: number | string;
  thumbnailSrc: string;
  productTitle: string;
};
const productList: Product[] = [
  {
    id: 1,
    thumbnailSrc: '/img/dmy_thumb02.jpg',
    productTitle: '商品タイトル',
  },
  {
    id: 2,
    thumbnailSrc: '/img/dmy_thumb02.jpg',
    productTitle: '商品タイトル',
  },
  {
    id: 3,
    thumbnailSrc: '/img/dmy_thumb02.jpg',
    productTitle: '商品タイトルタイトル最大30文字まであります',
  },
  {
    id: 4,
    thumbnailSrc: '/img/dmy_thumb02.jpg',
    productTitle: '商品タイトル',
  },
];

export const ProductCardList: FC = () => (
  <div className={Styles.productCardList}>
    {productList.map((product) => (
      <div key={`productCard-${product.id}`} className={Styles.productCardList__item}>
        <ProductCard thumbnailSrc={product.thumbnailSrc} title={product.productTitle} />
      </div>
    ))}
  </div>
);
