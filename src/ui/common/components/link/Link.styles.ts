// colors
import { Colors } from "../../colors";

// types
import { underlineType } from "./Link.types";
import { createUseStyles } from "react-jss";

interface StyleProps {
  underline?: underlineType;
}

export const useStyles = createUseStyles({
  root: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "19px",
    color: Colors.blueGrayLight,
    transition: "0.4s",
    textDecoration: ({ underline }: StyleProps) =>
      underline === "always" ? "underline" : "none",
    "&:hover": {
      textDecoration: ({ underline }: StyleProps) =>
        underline === "none" ? "none" : "underline",
      opacity: 0.8,
    },
  },
});
