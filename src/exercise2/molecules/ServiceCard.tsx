import type { FC } from 'react';
import { Background } from '../atoms/Background';
import Styles from '/src/exercise2/molecules/styles/serviceCard.module.scss';

type ContentSrc = {
  id: number;
  src: string;
  srcset: string;
};

interface Props {
  index: string;
  title: string;
  description: string;
  description2: string;
  contentSrcList: ContentSrc[];
  backgroundSrc: string;
}

export const ServiceCard: FC<Props> = (props) => {
  const { index, title, description, description2, contentSrcList, backgroundSrc } = props;
  return (
    <section className={Styles.serviceCard}>
      <div className={Styles.serviceCard__bg}>
        <Background src={backgroundSrc} />
      </div>
      <h2>
        <p>サービス{index}</p>
        <p>{title}</p>
      </h2>
      <div>
        <p>{description}</p>
        <p>{description2}</p>
      </div>
      <ul>
        {contentSrcList.map((content) => (
          <li key={`content-${content.id}`}>
            <img src={content.src} srcSet={content.srcset} alt="サンプル写真" />
          </li>
        ))}
      </ul>
    </section>
  );
};
