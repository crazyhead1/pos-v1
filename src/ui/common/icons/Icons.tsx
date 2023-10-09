import React, { FC } from "react";
import cx from "clsx";

// glyphs
import { glyphs } from "./glyphs";

// types
import { IIconsProps } from "./Icons.types";

// styles
import { useStyles } from "./Icons.styles";
import { getComponentColors } from "../themes/color-grads";

const componentColors = getComponentColors();
const Icons: FC<IIconsProps> = ({
  className = "",
  color = componentColors.PRIMARY.BACKGROUND,
  glyph,
  onClick,
}) => {
  const classes = useStyles();

  const Glyph = glyphs[glyph];
  if (Glyph) {
    return (
      <Glyph
        className={cx(classes.root, className)}
        color={color}
        onClick={onClick}
      />
    );
  }
  return null;
};

export { Icons };
