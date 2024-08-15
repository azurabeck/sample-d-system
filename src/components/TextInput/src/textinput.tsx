import * as S from "./styles";
import React, { useState, useRef, useEffect } from "react";

import AlertErrorIcon from "./assets/alert-color.svg";
import VisibilityOffIcon from "./assets/visibility-off-outline.svg";
import VisibilityIcon from "./assets/visibility-outline.svg";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  mask?: boolean;
  disabled?: boolean;
  width?: number | string;
  type?: "text" | "password";
  defaultValue?: string;
  onChangeText?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  error,
  type = "text",
  disabled = false,
  width,
  mask,
  defaultValue,
  onChangeText,
  ...rest
}) => {
  const iconLeftRef = useRef<HTMLDivElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const formatCurrency = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return `$ ${value}`;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
    if (iconLeftRef.current) {
      iconLeftRef.current.focus();
    }
  };
  const handleIconLeftKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === " " || event.key === "Spacebar" || event.keyCode === 32) {
      togglePasswordVisibility();
      event.preventDefault();
    }
  };

  const onChangeEvent = (value: string) => {
    if (mask) {
      const inputValue = value;
      const formattedValue = formatCurrency(inputValue);
      setValue(formattedValue);
      onChangeText?.(formattedValue.replace("$", ""));
    } else {
      setValue(value);
      onChangeText?.(value);
    }
  };

  useEffect(() => {
    if (mask) {
      const inputValue = defaultValue || value;
      const formattedValue = formatCurrency(inputValue);
      setValue(formattedValue);
      return;
    }
    setValue(defaultValue ?? "");
  }, [disabled, defaultValue]);

  const text = type === "text";
  const password = type === "password";
  const disabledtrue = disabled === true;
  const typeswich = isPasswordVisible ? "text" : type;
  const PasswordIcon = isPasswordVisible ? (
    <VisibilityIcon />
  ) : (
    <VisibilityOffIcon />
  );

  return (
    <S.Wrapper width={width}>
      <S.InputField
        value={value}
        type={typeswich}
        disabled={disabled}
        isError={error}
        onChange={(e) => onChangeEvent(e.target.value)}
        {...rest}
      />
      {error && (
        <S.IconError isError={text && true}>
          <AlertErrorIcon />
        </S.IconError>
      )}
      {password && !disabledtrue && (
        <S.IconLeft
          ref={iconLeftRef}
          onClick={togglePasswordVisibility}
          onKeyDown={handleIconLeftKeyDown}
          tabIndex={0}
        >
          {PasswordIcon}
        </S.IconLeft>
      )}
    </S.Wrapper>
  );
};

export default TextInput;
