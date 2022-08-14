import type { FC } from 'react';

interface Props {
  src: string;
}

export const Background: FC<Props> = (props) => {
  const { src } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  );
};
