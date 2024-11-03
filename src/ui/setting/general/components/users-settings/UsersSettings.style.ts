import { createUseStyles } from "react-jss";
import { Colors } from "../../../../common/colors";
import { ThemeInterface } from "../../../../../interfaces/theme";

export const useStylesFromThemeFunction = createUseStyles(
  (theme: ThemeInterface) => {
    return {
      container: {
        width: "100%",
        height: "1100px",
        minWidth: "fit-content",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        margin: "2px",
        borderRadius: "10px",
        backgroundColor: Colors.blueGrayLight,
      },
      formWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    };
  }
);
