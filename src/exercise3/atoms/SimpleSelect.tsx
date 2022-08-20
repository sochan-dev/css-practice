import classNames from 'classnames';
import type { DetailedHTMLProps, FC, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import Styles from '/src/exercise3/atoms/styles/simpleSelect.module.scss';

interface Props {
  attribute: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
  optionList: {
    id: string | number;
    label: string;
    attribute: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
  }[];
  overrideStyles?: string | undefined;
}
export const SimpleSelect: FC<Props> = (props) => {
  const { attribute, optionList, overrideStyles } = props;

  return (
    <div className={Styles.simpleSelect}>
      <select {...attribute} className={overrideStyles}>
        {optionList.map((option, i) => (
          <option key={option.id} {...option.attribute} disabled={i === 0}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
