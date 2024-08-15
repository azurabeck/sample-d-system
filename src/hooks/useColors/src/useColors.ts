import { useRef, useCallback } from "react";

const UseColors = () => {
  const areaMapColors: Record<number, string> = {
    0: "#8A00DF",
    1: "#1C77CF",
    2: "#E42B01",
    3: "#008676",
    4: "#520085",
    5: "#E00299",
    6: "#6A02FF",
    7: "#995A00",
    8: "#0101B4",
    9: "#717D00",
  };

  const colorsCommentRef = useRef(new Map<string, string>());

  const addNewColorsCommentRef = (user: string, color: string) =>
    colorsCommentRef.current.set(user, color);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const adjustBrightness = (color: string, percentage: number) => {
    const rgb = hexToRgb(color);
    if (!rgb) return color;

    const adjustedR = Math.max(
      0,
      Math.min(255, rgb.r - (255 * percentage) / 100)
    );
    const adjustedG = Math.max(
      0,
      Math.min(255, rgb.g - (255 * percentage) / 100)
    );
    const adjustedB = Math.max(
      0,
      Math.min(255, rgb.b - (255 * percentage) / 100)
    );

    return rgbToHex(adjustedR, adjustedG, adjustedB);
  };

  const getUserColor = useCallback((user: string) => {
    const userColor = colorsCommentRef.current.get(user);

    if (!userColor) {
      const colorsKeys = Array.from(colorsCommentRef.current.keys());
      const nextKey = colorsKeys.length % Object.keys(areaMapColors).length;
      const colorsTotal = Object.keys(areaMapColors);

      let newUserColor = areaMapColors[nextKey];

      if (colorsKeys.length >= colorsTotal.length) {
        newUserColor = adjustBrightness(newUserColor, 20);
      }

      addNewColorsCommentRef(user, newUserColor);

      return newUserColor;
    }

    return userColor;
  }, []);

  const getAllColors = () => {
    const colors = Object.values(areaMapColors);
    const darkenedColors = [];

    for (let i = 0; i < colors.length; i++) {
      if (i > 9) {
        const darkenedColor = adjustBrightness(colors[i], 20);
        darkenedColors.push(darkenedColor);
      } else {
        darkenedColors.push(colors[i]);
      }
    }

    return [...darkenedColors, ...darkenedColors.slice(0, 10)];
  };

  return { getUserColor, getAllColors };
};

export default UseColors;
