import type { FC } from 'react';
import { LinkButton } from '../atoms/LinkButton';
import { Thumbnail } from '../atoms/Thumbnail';
import Styles from '/src/exercise1/molecules/styles/serviceCard.module.scss';

interface Props {
  thumbnailSrc: string;
  serviceName: string;
  description: string;
  linkName: string;
  href: string;
}

export const ServiceCard: FC<Props> = (props) => {
  const { thumbnailSrc, serviceName, description, linkName, href } = props;

  return (
    <div className={Styles.serviceCard}>
      <div className={Styles.serviceCard__thumbnail}>
        <Thumbnail src={thumbnailSrc} alt="service" />
      </div>
      <div className={Styles.serviceCard__data}>
        <p className={Styles.serviceCard__name}>{serviceName}</p>
        <p className={Styles.serviceCard__description}>{description}</p>
        <LinkButton type="primary" size="m" href={href}>
          {linkName}
        </LinkButton>
      </div>
    </div>
  );
};
