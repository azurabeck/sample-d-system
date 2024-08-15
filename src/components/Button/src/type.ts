export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  loading?: boolean;
  iconSize?: number;
  size?: "lg" | "sm";
  disabled?: boolean;
  colorSpinner?: string;
  width?: string | number;
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "text";
}
