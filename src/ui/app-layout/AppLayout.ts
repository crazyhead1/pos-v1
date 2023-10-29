import { createUseStyles } from "react-jss";
import { ThemeInterface } from "../../interfaces/theme";
import { getComponentColors } from "../common/themes/color-grads";

export interface ComponentProps {}
const componentColors = getComponentColors();
export const useStylesFromThemeFunction = createUseStyles(
  (theme: ThemeInterface) => {
    return {
      tabs: {
        display: "flex",
        flexDirection: "column",
        width: "30px",
        height: "100%",
        position: "fixed",
        justifyContent: "flex-end",
        alignContent: "center",
        left: "0px",
        top: "0px",
        fontSize: "22px",
        fontFamily: "sans-serif",
        color: componentColors.PRIMARY.TEXT_COLOR,
        backgroundColor: componentColors.PRIMARY.BACKGROUND,
      },
      tabsOnAuth: {
        width: "0px",
        height: "100%",
        position: "fixed",
        left: "0px",
        top: "0px",
      },
      tabsWithSidebar: {
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "100%",
        position: "fixed",
        justifyContent: "flex-end",
        alignContent: "center",
        left: "0px",
        top: "0px",
        backgroundColor: componentColors.DISABLED.TEXT_COLOR,
        "&:hover": {
          cursor: "pointer",
          color: componentColors.DISABLED.BACKGROUND,
        },
      },
      tabsStyle: {
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "100%",
        position: "fixed",
        justifyContent: "flex-start",
        alignContent: "center",
        left: "0px",
        top: "0px",
        fontSize: "22px",
        fontFamily: "sans-serif",
        "&:hover": {
          cursor: "pointer",
          color: componentColors.DISABLED.BACKGROUND,
        },
      },
      contentPanWithSidebar: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "200px",
      },
      contentPan: {
        marginLeft: "30px",
      },
      contentPanOnAuth: {
        marginLeft: "0px",
      },
      SidebarArrow: {
        cursor: "pointer",
        position: "absolute",
      },
      link: {
        textDecoration: "none",
        cursor: "pointer",
      },
    };
  }
);
