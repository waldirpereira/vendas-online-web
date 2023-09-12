import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxSelect, TitleInput } from './select.style';

export interface SelectOption {
  value: number;
  label: string;
}

interface SelectProps extends SelectPropsAntd {
  title?: string;
  margin?: string;
}

const Select = ({ title, margin, ...props }: SelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      {title && <TitleInput>{title}</TitleInput>}
      <SelectAntd style={{ width: '100%' }} {...props}></SelectAntd>
    </BoxSelect>
  );
};

export default Select;
