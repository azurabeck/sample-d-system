/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import AlertErrorIcon from "./assets/alert-color.svg";
import * as S from "./styles";

type SelectProps = {
  error?: boolean;
  options?: any[];
  disabled?: boolean;
  placeholder?: string;
  selected?: string;
  defaultValue?: string;
  onChangeText?: (value: string) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const DropdownSelectSC: React.FC<SelectProps> = ({
  options,
  error,
  disabled,
  placeholder,
  defaultValue,
  onChangeText,
  ...rest
}) => {
  const [searchTerm] = useState("");
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const onChangeEvent = (value: string) => {
    setValue(value);
    onChangeText?.(value);
  };

  useEffect(() => {
    setValue(defaultValue ?? "");
  }, [disabled, defaultValue]);

  return (
    <S.SelectContainer role="select">
      <S.Select
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeEvent(e.target.value)}
        isError={error}
        {...rest}
      >
        <option value="" hidden></option>
        {options
          ?.filter((item) => item?.label.startsWith(searchTerm))
          .map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={defaultValue === option.value}
            >
              {option.label}
            </option>
          ))}
      </S.Select>

      {error && (
        <S.IconError>
          <AlertErrorIcon />
        </S.IconError>
      )}
    </S.SelectContainer>
  );
};

export default DropdownSelectSC;
