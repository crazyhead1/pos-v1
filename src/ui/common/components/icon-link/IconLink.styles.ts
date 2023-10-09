// colors
import { Colors } from "../../colors";

// types
import { iconLinkPosition, iconLinkStyle } from "./IconLink.types";
import { createUseStyles } from "react-jss";

interface StyleProps {
  style: iconLinkStyle;
  iconPosition?: iconLinkPosition;
  textStyle: iconLinkStyle;
}

const textColors = {
  [iconLinkStyle.NEUTRAL_700]: Colors.black,
};

export const useStyles = createUseStyles({
  root: ({ style }: StyleProps) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 16,
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.01em",
    color: textColors[style],
    width: "100%",
  }),
  icon: ({ iconPosition }: StyleProps) => ({
    width: 15,
    minWidth: 15,
    height: 15,
    objectFit: "contain",
    order: iconPosition === iconLinkPosition.LEFT ? 0 : 1,
  }),
  text: ({ textStyle }: StyleProps) => ({
    color: textColors[textStyle],
    width: "100%",
  }),
});
