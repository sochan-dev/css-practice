import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { FormDecoration } from '../Wrapper/FormDecoration';
import { SimpleInput } from '../atoms/SimpleInput';

interface Props {
  attribute: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  isError: boolean;
  errorMsg: string;
  annotation?: string;
}

export const Input: FC<Props> = (props) => {
  const { attribute, isError, errorMsg, annotation } = props;

  return (
    <FormDecoration isError={isError} errorMsg={errorMsg} annotation={annotation}>
      <SimpleInput attribute={attribute} />
    </FormDecoration>
  );
};
