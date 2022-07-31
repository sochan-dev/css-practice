import type { FC } from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import Styles from '/src/exercise1/organisms/styles/serviceCardList.module.scss';

type Service = {
  id: number | string;
  thumbnailSrc: string;
  serviceName: string;
  description: string;
  linkName: string;
  href: string;
};
const serviceList: Service[] = [
  {
    id: 1,
    thumbnailSrc: '/img/dmy_thumb01.jpg',
    serviceName: 'サービス名',
    description: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
    linkName: '詳しく見る',
    href: '#service',
  },
  {
    id: 2,
    thumbnailSrc: '/img/dmy_thumb01.jpg',
    serviceName: 'サービス名',
    description: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
    linkName: '詳しく見る',
    href: '#service',
  },
  {
    id: 3,
    thumbnailSrc: '/img/dmy_thumb01.jpg',
    serviceName: 'サービス名',
    description: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
    linkName: '詳しく見る',
    href: '#service',
  },
];

export const ServiceCardList: FC = () => (
  <div className={Styles.serviceCardList}>
    {serviceList.map((service) => (
      <div className={Styles.serviceCardList__item} key={`serviceCard-${service.id}`}>
        <ServiceCard
          thumbnailSrc={service.thumbnailSrc}
          serviceName={service.serviceName}
          description={service.description}
          linkName={service.linkName}
          href={service.href}
        />
      </div>
    ))}
  </div>
);
