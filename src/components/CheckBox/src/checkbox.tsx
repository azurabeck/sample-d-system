import React, { useEffect, useState } from "react";
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from "./styles";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  isFocused?: boolean;
  children?: React.ReactNode;
  defaultChecked?: boolean;
  onChangeChecked?: (value: boolean) => void;
}
const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  children,
  isFocused = false,
  defaultChecked,
  onChangeChecked,
  ...rest
}) => {
  const [value, setValue] = useState<boolean>(defaultChecked ?? false);

  const onChangeEvent = (value: boolean) => {
    setValue(value);
    onChangeChecked?.(value);
  };

  useEffect(() => {
    setValue(defaultChecked ?? false);
  }, [disabled, defaultChecked]);

  return (
    <CheckboxContainer isDisabled={disabled}>
      <CheckboxInput
        checked={value}
        type="checkbox"
        isDisabled={disabled}
        disabled={disabled}
        isFocused={isFocused}
        onChange={(e) => onChangeEvent(e.target.checked)}
        {...rest}
      />
      <CheckboxLabel isDisabled={disabled}>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
