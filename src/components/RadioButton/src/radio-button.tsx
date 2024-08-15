/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useState } from "react";
import AlertErrorIcon from "./assets/alert-color.svg";
import * as S from "./styles";

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  defaultValue?: string;
  defaultChecked?: boolean;
  styleType?: string;
  options?: any[];
  error?: boolean;
  errorText?: string;
  onChangeChecked?: (value?: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  disabled,
  defaultValue,
  defaultChecked,
  styleType = "normal",
  options,
  error,
  errorText,
  onChangeChecked,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.defaultValue);
    onChangeChecked?.(event.target.defaultValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [disabled, defaultValue, defaultChecked]);

  return (
    <Fragment>
      {styleType === "normal" && (
        <S.RadioButtonWrapper isDisabled={disabled}>
          <input
            type="radio"
            value={value}
            disabled={disabled}
            onChange={(e) => onChangeEvent(e)}
            {...rest}
          />
          <S.Text isDisabled={disabled}>{children}</S.Text>
        </S.RadioButtonWrapper>
      )}
      {styleType === "square" && (
        <Fragment>
          {options?.map((item, index) => (
            <S.RadioButtonWrapper isDisabled={disabled} key={index}>
              <S.TextSquare
                isDisabled={disabled}
                checked={item.value === value}
                isFirstItem={index === 0}
                isLastItem={index === options.length - 1}
                error={error}
              >
                <input
                  id={item.label}
                  type="radio"
                  value={item.value}
                  disabled={disabled}
                  onChange={(e) => onChangeEvent(e)}
                  hidden
                  {...rest}
                />
                {item.label}
              </S.TextSquare>
            </S.RadioButtonWrapper>
          ))}
          {error && (
            <S.IconError>
              <S.IconDiv>
                <AlertErrorIcon /> <S.ErrorText>{errorText}</S.ErrorText>
              </S.IconDiv>
            </S.IconError>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default RadioButton;
