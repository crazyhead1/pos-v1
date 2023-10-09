// colors
import { createUseStyles } from "react-jss";
import { COLOR_GRIDS, getComponentColors } from "../../themes/color-grads";

const componentColors = getComponentColors();
export const useStyles = createUseStyles({
  iconWrapper: {
    height: 64,
    width: 64,
    borderRadius: 4,
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center  ",
    backgroundColor: componentColors.PRIMARY.BACKGROUND,
    borderColor: componentColors.PRIMARY.OUTLINE,
    "& svg path": {
      fill: componentColors.PRIMARY.TEXT_COLOR,
    },
  },
  status: {
    borderRadius: 100,
    minWidth: "auto",
    fontSize: 14,
    height: 30,
  },
  statusBadge: {
    margin: "0 0 24px 88px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  root: {
    "& 	.MuiBackdrop-root": {
      backgroundColor: `${COLOR_GRIDS.BLACKS[50]}59`,
    },
  },
  formRoot: {
    "&  .MuiDrawer-paper": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
    },
  },
  vertical: {
    "& .MuiDrawer-paper": {
      boxShadow: "none",
      width: "90%",
      maxWidth: 590,
      height: "100%",
    },
  },
  horizontal: {
    "& .MuiDrawer-paper": {
      boxShadow: "none",
      width: "100%",
      maxHeight: 390,
      height: "90%",
    },
  },

  drawerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${COLOR_GRIDS.BLACKS[20]}`,
    height: 80,
    padding: 24,
  },
  bigDrawerHeader: {
    height: 108,
  },
  biggerDrawerHeader: {
    height: 152,
  },
  drawerFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: `1px solid ${COLOR_GRIDS.BLACKS[20]}`,
    height: 80,
    padding: 24,
  },
  closeIcon: {
    width: 24,
    height: 24,
    color: componentColors.PRIMARY.BACKGROUND,
    cursor: "pointer",
  },
  drawerCancelBtn: {
    padding: 0,
    color: componentColors.PRIMARY.OUTLINE,
    fontSize: 14,
    fontWeight: 700,
    minWidth: 48,
    height: 48,
  },
  drawerUpdateBtn: {
    height: 48,
    padding: "12px 20px ",
    minWidth: 97,
  },
  drawerBody: {
    padding: 40,
  },
  headSubTitle: {
    marginTop: 4,
    lineHeight: "24px",
    color: COLOR_GRIDS.BLACKS[30],
    display: "inline-block",
  },
  headTitle: {
    margin: 0,
    lineHeight: "32px",
    color: COLOR_GRIDS.BLACKS[50],
  },
  headTitleSmall: {
    margin: 0,
    lineHeight: "32px",
    color: COLOR_GRIDS.BLACKS[50],
    fontSize: "18px",
  },
  topContentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 24,
  },
  topContentWrapper1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  topContentWrapperfortitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subtitleComponent: {
    marginTop: 16,
  },
  narrowHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
