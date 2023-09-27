import { useEffect, useState } from 'react';

import Input, { InputProps } from '../input/Input';

interface MoneyProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const DECIMAL_SIZE = 2;

const Money = ({ value, onChange, addonBefore = '$', ...props }: MoneyProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);
  useEffect(() => {
    const valueString = `${value}`;
    if (!/\D/.test(valueString.replace('.', ''))) {
      setCurrentValue(Number(value).toFixed(DECIMAL_SIZE).toString());
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueOnlyNumbers = event.target.value.replace('.', '');
    const sliceSize = valueOnlyNumbers.length - DECIMAL_SIZE;
    const newValue = [
      valueOnlyNumbers.slice(0, sliceSize),
      '.',
      valueOnlyNumbers.slice(sliceSize),
    ].join('');

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input
      addonBefore={addonBefore}
      value={currentValue}
      onChange={handleOnChange}
      {...props}
    ></Input>
  );
};

export default Money;
