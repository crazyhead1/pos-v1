import { createUseStyles } from "react-jss";
import { ThemeInterface } from "../../../../interfaces/theme";
import { getComponentColors } from "../../themes/color-grads";
import { Colors } from "../../colors";

export interface ComponentProps {
  label?: string;
  options?: { value: any; label: string | undefined }[];
  isLoading?: boolean;
  products: any[];
  handleCancel?: () => void;
  handleConfirm?: () => void;
  handlePrint?: () => void;
  disabled?: boolean;
  invoiceNumber?: string;
}

export const useStylesFromThemeFunction = createUseStyles(
  (theme: ThemeInterface) => {
    const colors = getComponentColors();
    return {
      title: {
        fontSize: "36px",
        fontWeight: "600",
        lineHeight: "40px",
      },
      title2: {
        color: colors.PRIMARY.BACKGROUND,
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "24px",
      },
      productsList: {
        height: "500px",
        overflow: "auto",
        width: "100%",
      },
      totalBillContainer: {
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        borderRadius: "5px",
        padding: "5px",
        minWidth: "fit-content",
        height: "1000px",
        backgroundColor: Colors.blueGrayLightDim,
      },
      row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        flexWrap: "wrap",
        width: "100%",
      },
      column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start  ",
        width: "100%",
      },
      equallyDistantRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        paddingTop: "10%",
        paddingBottom: "5%",
        minWidth: "fit-content",
      },
      equallyDistantColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around",
        flexWrap: "wrap",
        paddingTop: "5%",
        paddingLeft: "5%",
        justifyContent: "space-around",
        width: "100%",
        minWidth: "fit-content",
      },
      buttonsContainer: {
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: "10%",
        justifyContent: "flex-end",
      },
      padding8: {
        padding: "8%",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      },
      pl5: {
        paddingLeft: "5%",
      },
      p5: {
        padding: "5%",
      },
      spaceBetween: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      paddingtop8: {
        paddingTop: "8%",
        paddingLeft: "5%",
      },
      noData: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    };
  }
);
