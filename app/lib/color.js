const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const hexToRgb = hex => {
  const result = hexRegex.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 };
};

export const rgbToHex = ({ r, g, b }) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
