import { createUseStyles } from "react-jss";

export interface ComponentProps {}

export const useStylesFromThemeFunction = createUseStyles({
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  colorBox: {
    height: "200px",
    width: "200px",
  },
  color: {
    height: "150px",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  colorTitle: {
    fontWeight: "900",
    fontSize: 42,
    opacity: "0.2",
  },
  hoverColorTitle: {
    fontWeight: "900",
    fontSize: 42,
    color: "#ffffff",
    opacity: "0.2",
  },
  whiteColorTitle: {
    fontWeight: "900",
    fontSize: 42,
    opacity: "0.2",
    color: "#ffffff",
  },
});
