import { createUseStyles } from "react-jss";
import { BLACKS, SKY_BLUES } from "../../common/themes/color-grads";

export const useStylesFromThemeFunction = createUseStyles({
  root: {
    display: "flex",
    padding: "24px",
    margin: "24px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "32px",
    fontFamily: "sans-serif",
  },
  addBtn: {
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "24px",
    fontFamily: "sans-serif",
    color: "white",
    border: "none",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  visibleConatiner: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "24px",
  },
  listContainer: {
    // border: "0.5px solid #000000",
    borderRadius: "8px",
    boxShadow: `10px 10px 5px ${BLACKS[20]}`,
    backgroundColor: SKY_BLUES[10],
  },
});
