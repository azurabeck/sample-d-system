/* eslint-disable */

export interface ISuggestion {
  [key: string]: any;
}

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  baseUrl: string;
  pathUrl: string;
  fieldKey: string;
  defaultValue?: string;
  onChangeText?: (item: ISuggestion) => void;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
  width?: string | number;
}
