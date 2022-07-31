import type { FC, ReactNode } from 'react';
import { HeadingText } from '../atoms/HeadingText';
import { LinkButton } from '../atoms/LinkButton';
import Styles from '/src/exercise1/organisms/styles/mainContent.module.scss';

interface Props {
  headerTxt: string;
  linkTxt: string;
  href: string;
  children: ReactNode;
}

export const MainContent: FC<Props> = (props) => {
  const { headerTxt, linkTxt, href, children } = props;

  return (
    <section className={Styles.mainContent}>
      <div className={Styles.mainContent__header}>
        <HeadingText>{headerTxt}</HeadingText>
      </div>
      <div className={Styles.mainContent__content}>{children}</div>
      <div className={Styles.mainContent__linkButton}>
        <LinkButton type="secondary" size="l" href={href}>
          {linkTxt}
        </LinkButton>
      </div>
    </section>
  );
};
