import React from "react";
import { SwitchInput, SwitchLabel, SwitchButton } from "./styles";

export type SwitchProps = {
  id?: string;
  onClick?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<SwitchProps> = ({ id, onClick, ...rest }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        {...rest}
      />
      <SwitchLabel
        onClick={onClick}
        className="switch-label"
        htmlFor={id}
        colorOn={rest.checked}
      >
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};

export default Switch;
