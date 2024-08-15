import * as S from "./styles";
import React, { useEffect, useState } from "react";

import AlertErrorIcon from "./assets/alert-color.svg";

export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number | string;
  error?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  onChangeText?: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  error,
  width,
  disabled = false,
  defaultValue,
  onChangeText,
  ...rest
}) => {
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const onChangeEvent = (value: string) => {
    setValue(value);
    onChangeText?.(value);
  };

  useEffect(() => {
    setValue(defaultValue ?? "");
  }, [disabled, defaultValue]);

  return (
    <>
      <S.DatePickerContainer width={width}>
        <S.DateInput
          value={value}
          type="date"
          onChange={(e) => onChangeEvent(e.target.value)}
          isError={error}
          disabled={disabled}
          {...rest}
        />
        {error && (
          <S.IconError>
            <AlertErrorIcon />
          </S.IconError>
        )}
      </S.DatePickerContainer>
    </>
  );
};

export default DatePicker;
