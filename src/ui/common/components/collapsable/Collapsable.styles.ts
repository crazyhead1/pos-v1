// colors
import { Colors } from "../../colors";
import { fontWeight, textLevel } from "../typography";
import { createUseStyles } from "react-jss";

interface StyleProps {
  collapsed?: boolean;
  active?: boolean;
}

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    background: ({ active }) => (active ? Colors.gray : "transparent"),
  },
  chevronIcon: {
    width: 24,
    minWidth: 24,
    height: 24,
    objectFit: "contain",
    transition: "0.4s",
    marginLeft: "12px",
    marginRight: "12px",
    transform: ({ collapsed }: StyleProps) =>
      `rotate(${collapsed ? "180deg" : 0})`,
  },
  label: {
    fontFamily: "Manrope",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  subLabel: {
    color: Colors.gray,
    fontSize: textLevel.S,
    fontWeight: fontWeight.LIGHT,
  },
});
