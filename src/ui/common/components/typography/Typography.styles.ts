// types
import { fontWeight, headingLevel, textLevel } from "./Typography.types";
import { COLOR_GRIDS, getComponentColors } from "../../themes/color-grads";
import { createUseStyles } from "react-jss";

interface StyleProps {
  weight?: fontWeight;
  level?: headingLevel | textLevel;
  size?: number | string;
}

const headingFontSize = {
  [headingLevel.XL]: 40,
  [headingLevel.L]: 34,
  [headingLevel.M]: 24,
  [headingLevel.S]: 18,
};

const textFontSize = {
  [textLevel.XL]: 32,
  [textLevel.L]: 22,
  [textLevel.M]: 16,
  [textLevel.S]: 14,
  [textLevel.XS]: 12,
};

export const useStyles = createUseStyles({
  typography: {
    color: COLOR_GRIDS.BLACKS[90],
    fontFamily: "Manrope",
    fontWeight: ({ weight }: StyleProps) => weight,
    lineHeight: 1,
  },
  heading: {
    fontSize: ({ size, level }: StyleProps) =>
      size || headingFontSize[level as headingLevel],
  },
  text: {
    fontSize: ({ size, level }: StyleProps) =>
      size || textFontSize[level as textLevel],
  },
  error: {
    color: COLOR_GRIDS.REDS[60],
    fontSize: 12,
    lineHeight: "16px",
  },
});
