import React from "react";
import Image from "next/image";
import { ButtonProps } from "./type";

import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  size = "lg",
  iconSize = 24,
  width = "100%",
  loading = false,
  disabled = false,
  variant = "primary",
  colorSpinner = "#1e2347",
  ...rest
}) => {
  return (
    <S.ButtonWrapper
      size={size}
      width={width}
      variant={variant}
      isDisabled={disabled}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <S.Spinner colorSpinner={colorSpinner} />
      ) : (
        <>
          {icon && (
            <S.Icon>
              <Image src={icon} width={iconSize} height={iconSize} alt="" />
            </S.Icon>
          )}
          <S.TextButton>{children}</S.TextButton>
        </>
      )}
    </S.ButtonWrapper>
  );
};

export default Button;
