import type { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { FormDecoration } from '../Wrapper/FormDecoration';
import { SimpleTextArea } from '../atoms/SimpleTextArea';

interface Props {
  attribute: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  isError: boolean;
  errorMsg: string;
  annotation: string;
}

export const TextArea: FC<Props> = (props) => {
  const { attribute, isError, errorMsg, annotation } = props;

  return (
    <FormDecoration isError={isError} errorMsg={errorMsg} annotation={annotation}>
      <SimpleTextArea attribute={attribute} />
    </FormDecoration>
  );
};
