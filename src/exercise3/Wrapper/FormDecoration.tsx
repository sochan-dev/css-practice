import { FC, cloneElement, ReactElement } from 'react';
import { ErrorMsg } from '../atoms/ErrorMsg';
import Styles from '/src/exercise3/Wrapper/styles/formDecoration.module.scss';

interface Props {
  children: ReactElement;
  isError: boolean;
  errorMsg: string;
  annotation?: string;
}

export const FormDecoration: FC<Props> = (props) => {
  const { children, isError, errorMsg, annotation } = props;

  const newChildren = cloneElement(children, {
    overrideStyles: `${isError ? Styles.formDecoration__children_error : ''} ${
      Styles.formDecoration__children_focus
    }`,
  });

  return (
    <div className={Styles.formDecoration}>
      {newChildren}
      {isError && (
        <div className={Styles.formDecoration__errorMsg}>
          <ErrorMsg msg={errorMsg} />
        </div>
      )}
      {annotation && <p className={Styles.formDecoration__annotation}>{`※${annotation}`}</p>}
    </div>
  );
};
