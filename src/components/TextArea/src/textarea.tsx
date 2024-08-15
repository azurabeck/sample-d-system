import React, { useEffect, useState } from "react";
import * as S from "./styles";
import AlertErrorIcon from "./assets/alert-color.svg";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  error?: boolean;
  enableDigitalCount?: boolean;
  label?: string;
  defaultValue?: string;
  onChangeText?: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label = "",
  maxLength,
  disabled = false,
  enableDigitalCount = false,
  error = false,
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
    <S.ContainerWrapper>
      <S.TextContainer>
        <S.Text>{label}</S.Text>
        {enableDigitalCount && maxLength && (
          <S.Number>
            {value.length}/{maxLength}
          </S.Number>
        )}
      </S.TextContainer>
      <S.Textarea
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        isDisabled={disabled}
        isError={error}
        onChange={(e) => onChangeEvent(e.target.value)}
        {...rest}
      />
      {error && (
        <S.Icon>
          <AlertErrorIcon />
        </S.Icon>
      )}
    </S.ContainerWrapper>
  );
};

export default TextArea;
