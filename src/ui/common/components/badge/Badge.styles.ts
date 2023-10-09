import { alpha } from "@mui/material/styles";
import { createUseStyles } from "react-jss";
// colors
import { Colors } from "../../colors";

// types
import { badgeType, badgeSize, badgeStyle } from "./Badge.types";

interface StyleProps {
  variant: badgeType;
  size?: badgeSize;
  style: badgeStyle;
}

const filledColors = {
  [badgeStyle.PRIMARY]: {
    bg: Colors.blueGrayLight,
    text: Colors.blueGrayDarkLight,
    border: Colors.white,
  },
};

const outlinedColors = {
  [badgeStyle.PRIMARY]: {
    bg: Colors.white,
    text: Colors.blueGrayLight,
    border: alpha(Colors.blueGrayDarkLight, 0.25),
  },
};

const iconColors = {
  [badgeStyle.PRIMARY]: {
    bg: Colors.blueGrayDarkLight,
    text: Colors.white,
    border: Colors.blueGrayLight,
  },
};

const badgeColors = {
  [badgeType.FILLED]: filledColors,
  [badgeType.OUTLINED]: outlinedColors,
  [badgeType.ICON]: iconColors,
};

const height = {
  [badgeType.FILLED]: 32,
  [badgeType.OUTLINED]: 48,
  [badgeType.ICON]: 24,
};

const padding = {
  [badgeType.FILLED]: "0px 12px",
  [badgeType.OUTLINED]: "0px 16px",
  [badgeType.ICON]: "2px 10px 2px 4px",
};

const fontWeight = {
  [badgeType.FILLED]: "Bold",
  [badgeType.OUTLINED]: "Bold",
  [badgeType.ICON]: 600,
};

const lineHeight = {
  [badgeType.FILLED]: "19px",
  [badgeType.OUTLINED]: "19px",
  [badgeType.ICON]: "20px",
};

export const useStyles = createUseStyles({
  root: ({ variant, size, style }: StyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: size || height[variant],
    padding: padding[variant],
    gap: "4px",
    fontSize: 14,
    fontFamily: "Manrope",
    fontWeight: fontWeight[variant],
    lineHeight: lineHeight[variant],
    letterSpacing: "0.01em",
    color: badgeColors[variant][style]?.text,
    backgroundColor: badgeColors[variant][style]?.bg,
    border: `1px solid ${badgeColors[variant][style]?.border}`,
    borderRadius: 20,
    width: "fit-content",
  }),
  icon: {
    width: 16,
    height: 16,
  },
});
