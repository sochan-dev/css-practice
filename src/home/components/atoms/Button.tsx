import type { FC, MouseEvent } from 'react';

interface Props {
  txt: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<Props> = (props) => {
  const { txt, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {txt}
    </button>
  );
};
