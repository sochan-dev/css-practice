import type { DetailedHTMLProps, FC, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { FormDecoration } from '../Wrapper/FormDecoration';
import { SimpleSelect } from '../atoms/SimpleSelect';

interface Props {
  attribute: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
  optionList: {
    id: string | number;
    label: string;
    attribute: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
  }[];
  isError: boolean;
  errorMsg: string;
  annotation: string;
}

export const Select: FC<Props> = (props) => {
  const { attribute, optionList, isError, errorMsg, annotation } = props;

  return (
    <FormDecoration isError={isError} errorMsg={errorMsg} annotation={annotation}>
      <SimpleSelect attribute={attribute} optionList={optionList} />
    </FormDecoration>
  );
};
