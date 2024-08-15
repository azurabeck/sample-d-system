type Theme = {
  text: {
    light: {
      "$text-primary": string;
      "$text-secondary": string;
      "$text-accent": string;
      "$text-muted": string;
      "$text-error": string;
    };
    dark: {
      "$text-primary": string;
      "$text-secondary": string;
      "$text-accent": string;
      "$text-muted": string;
      "$text-error": string;
    };
  };
  icons: {
    light: {
      "$icon-secondary": string;
      "$icon-primary": string;
      "$icon-accent": string;
      "$icon-muted": string;
    };
    dark: {
      "$icon-primary": string;
      "$icon-secondary": string;
      "$icon-accent": string;
      "$icon-muted": string;
    };
  };
  background: {
    light: {
      "$background-primary": string;
      "$background-secondary": string;
      "$background-tertiary": string;
    };
    dark: {
      "$background-primary": string;
      "$background-secondary": string;
      "$background-tertiary": string;
    };
  };
  borders: {
    light: {
      "$border-primary": string;
      "$border-secondary": string;
      "$border-tertiary": string;
      "$border-accent": string;
    };
    dark: {
      "$border-primary": string;
      "$border-secondary": string;
      "$border-tertiary": string;
      "$border-accent": string;
    };
  };
  buttons: {
    light: {
      "$button-enabled": string;
      "$button-hover": string;
      "$button-focus": string;
      "$button-active": string;
      "$button-disabled": string;
    };
    dark: {
      "$button-enabled": string;
      "$button-hover": string;
      "$button-focus": string;
      "$button-active": string;
      "$button-disabled": string;
    };
  };
  links: {
    light: {
      "$link-default": string;
      "$link-hover": string;
      "$link-visited": string;
    };
    dark: {
      "$link-default": string;
      "$link-hover": string;
      "$link-visited": string;
    };
  };
  support: {
    light: {
      "$support-success": string;
      "$support-error": string;
      "$support-warning": string;
      "$support-information": string;
      "$support-focus": string;
    };
    dark: {
      "$support-success": string;
      "$support-error": string;
      "$support-warning": string;
      "$support-information": string;
      "$support-focus": string;
    };
  };
  opacity: {
    light: {
      "$opacity-light-5": string;
      "$opacity-light-10": string;
      "$opacity-light-20": string;
      "$opacity-light-40": string;
      "$opacity-light-60": string;
      "$opacity-light-80": string;
    };
    dark: {
      "$opacity-dark-5": string;
      "$opacity-dark-10": string;
      "$opacity-dark-20": string;
      "$opacity-dark-40": string;
      "$opacity-dark-60": string;
      "$opacity-dark-80": string;
    };
  };
  gradient: {
    light: {
      "$gradient-primary": string;
      "$gradient-secondary": string;
    };
    dark: {
      "$gradient-primary": string;
      "$gradient-secondary": string;
    };
  };
  palettes: {
    primary: {
      "$primary-50": string;
      "$primary-100": string;
      "$primary-200": string;
      "$primary-300": string;
      "$primary-400": string;
      "$primary-500": string;
      "$primary-600": string;
      "$primary-700": string;
      "$primary-800": string;
      "$primary-900": string;
    };
    secondary: {
      "$secondary-50": string;
      "$secondary-100": string;
      "$secondary-200": string;
      "$secondary-300": string;
      "$secondary-400": string;
      "$secondary-500": string;
      "$secondary-600": string;
      "$secondary-700": string;
      "$secondary-800": string;
      "$secondary-900": string;
    };
    blue: {
      "$blue-50": string;
      "$blue-100": string;
      "$blue-200": string;
      "$blue-300": string;
      "$blue-400": string;
      "$blue-500": string;
      "$blue-600": string;
      "$blue-700": string;
      "$blue-800": string;
      "$blue-900": string;
    };
    marine: {
      "$marine-50": string;
      "$marine-100": string;
      "$marine-200": string;
      "$marine-300": string;
      "$marine-400": string;
      "$marine-500": string;
      "$marine-600": string;
      "$marine-700": string;
      "$marine-800": string;
      "$marine-900": string;
    };
    green: {
      "$green-50": string;
      "$green-100": string;
      "$green-200": string;
      "$green-300": string;
      "$green-400": string;
      "$green-500": string;
      "$green-600": string;
      "$green-700": string;
      "$green-800": string;
      "$green-900": string;
    };
    yellow: {
      "$yellow-50": string;
      "$yellow-100": string;
      "$yellow-200": string;
      "$yellow-300": string;
      "$yellow-400": string;
      "$yellow-500": string;
      "$yellow-600": string;
      "$yellow-700": string;
      "$yellow-800": string;
      "$yellow-900": string;
    };
    orange: {
      "$orange-50": string;
      "$orange-100": string;
      "$orange-200": string;
      "$orange-300": string;
      "$orange-400": string;
      "$orange-500": string;
      "$orange-600": string;
      "$orange-700": string;
      "$orange-800": string;
      "$orange-900": string;
    };
    red: {
      "$red-50": string;
      "$red-100": string;
      "$red-200": string;
      "$red-300": string;
      "$red-400": string;
      "$red-500": string;
      "$red-600": string;
      "$red-700": string;
      "$red-800": string;
      "$red-900": string;
    };
    neutral: {
      gray: {
        "$gray-0": string;
        "$gray-50": string;
        "$gray-100": string;
        "$gray-200": string;
        "$gray-300": string;
        "$gray-400": string;
        "$gray-500": string;
        "$gray-600": string;
        "$gray-700": string;
        "$gray-800": string;
        "$gray-900": string;
      };
      "gray-bluish": {
        "$gray-bluish-50": string;
        "$gray-bluish-100": string;
        "$gray-bluish-200": string;
        "$gray-bluish-300": string;
        "$gray-bluish-400": string;
        "$gray-bluish-500": string;
        "$gray-bluish-600": string;
        "$gray-bluish-700": string;
        "$gray-bluish-800": string;
        "$gray-bluish-900": string;
      };
    };
  };
  "$shadow-soft": {
    color: string;
    type: string;
    x: number;
    y: number;
    blur: number;
    spread: number;
  };
  "$shadow-medium": {
    color: string;
    type: string;
    x: number;
    y: number;
    blur: number;
    spread: number;
  };
  "$shadow-strong": {
    color: string;
    type: string;
    x: number;
    y: number;
    blur: number;
    spread: number;
  };
  fontFamilies: {
    figtree: string;
  };
  lineHeights: Record<string, number>;
  fontWeights: {
    "figtree-0": string;
    "figtree-1": string;
    "figtree-2": string;
  };
  fontSize: Record<string, number>;
  letterSpacing: Record<string, number>;
  paragraphSpacing: Record<string, number>;
  spacing: {
    "$spacing-01": number;
    "$spacing-02": number;
    "$spacing-03": number;
    "$spacing-04": number;
    "$spacing-05": number;
    "$spacing-06": number;
    "$spacing-07": number;
    "$spacing-08": number;
    "$spacing-09": number;
    "$spacing-10": number;
    "$spacing-11": number;
    "$spacing-12": number;
    "$spacing-13": number;
  };
};
