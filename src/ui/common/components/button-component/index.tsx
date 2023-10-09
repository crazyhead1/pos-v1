import React from "react";
import { createUseStyles } from "react-jss";
import { ThemeInterface } from "../../../../interfaces/theme";
import { getComponentColors } from "../../themes/color-grads";
import { btnType } from "./ButtonComponent.types";
import LoadingSpinner from "../loading-spinner";

export enum btnSize {
  S = "S",
  M = "M",
  L = "L",
  VARIABLE = "V",
}
interface ComponentProps {
  children?: any;
  variant?: btnType;
  onClick?: () => void;
  isLoading?: boolean;
  size?: btnSize;
  type?: "button" | "submit";
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}
const componentColors = getComponentColors();
const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    btnContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    btnLoader: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    default: {
      padding: "8px",

      paddingTop: 5,
      minWidth: 5,
      minHeight: 5,
      borderRadius: 5,
      marginLeft: 4,
      marginRight: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
    small: {
      width: "fit-content",
      height: 30,
      fontWeight: 400,
      fontSize: "16px",
    },
    medium: {
      width: 100,
      height: 40,
      fontWeight: 500,
      fontSize: "18px",
    },
    large: {
      width: 200,
      height: 45,
      fontWeight: 600,
      fontSize: "20px",
    },
    variable: {
      width: "100%",
      height: 40,
      fontWeight: 500,
      fontSize: "18px",
    },
    primary: {
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: componentColors.PRIMARY.BACKGROUND,
      color: componentColors.PRIMARY.TEXT_COLOR,
    },
    primaryOutline: {
      borderWidth: 2,
      borderStyle: "solid",
      backgroundColor: "inherit",
      borderColor: componentColors.PRIMARY.OUTLINE,
      color: componentColors.PRIMARY.OUTLINE_TEXT_COLOR,
    },
    secondary: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: componentColors.SECONDARY.OUTLINE,
      color: componentColors.SECONDARY.TEXT_COLOR,
      backgroundColor: componentColors.SECONDARY.BACKGROUND,
    },
    disable: {
      "&:hover": {
        cursor: "not-allowed",
      },
      backgroundColor: componentColors.DISABLED.BACKGROUND,
      color: componentColors.DISABLED.TEXT_COLOR,
    },
  };
});

const ButtonComponent: React.FC<ComponentProps> = ({
  children,
  onClick,
  type = "button",
  isLoading = false,
  variant = btnType.PRIMARY,
  size = btnSize.M,
  style,
  className,
  disabled = false,
}) => {
  const classes = useStylesFromThemeFunction();
  const handleVariant = () => {
    if (disabled) {
      return classes.disable;
    }
    switch (variant) {
      case btnType.OUTLINE: {
        return classes.primaryOutline;
      }
      case btnType.SECONDARY: {
        return classes.secondary;
      }
      default:
        return classes.primary;
    }
  };
  const handleSize = () => {
    switch (size) {
      case btnSize.S: {
        return classes.small;
      }
      case btnSize.L: {
        return classes.large;
      }
      case btnSize.VARIABLE: {
        return classes.variable;
      }
      default:
        return classes.medium;
    }
  };
  return (
    <button
      style={style}
      type={type}
      className={`${className} ${
        classes.default
      } ${handleVariant()} ${handleSize()}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={classes.btnContent}>
        {isLoading ? (
          <div className={classes.btnLoader}>
            <LoadingSpinner />
          </div>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

export default ButtonComponent;
