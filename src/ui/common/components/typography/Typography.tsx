import React, { FC } from "react";
import cx from "clsx";

// types
import {
  ITextErrorProps,
  IHeadingProps,
  headingLevel,
  ITextProps,
  textLevel,
  fontWeight,
} from "./Typography.types";

// styles
import { useStyles } from "./Typography.styles";

const Heading: FC<IHeadingProps> = ({
  className = "",
  level = headingLevel.XL,
  weight = fontWeight.REGULAR,
  children,
  color,
  ...rest
}) => {
  const classes = useStyles({ weight, level });

  const headingClasses = cx({
    [classes.typography]: true,
    [classes.heading]: true,
    [className || ""]: className,
  });

  switch (level) {
    default:
    case headingLevel.XL:
      return (
        <h1 className={headingClasses} style={{ color }} {...rest}>
          {children}
        </h1>
      );
    case headingLevel.L:
      return (
        <h2 className={headingClasses} style={{ color }} {...rest}>
          {children}
        </h2>
      );
    case headingLevel.M:
      return (
        <h3 className={headingClasses} style={{ color }} {...rest}>
          {children}
        </h3>
      );
    case headingLevel.S:
      return (
        <h4 className={headingClasses} style={{ color }} {...rest}>
          {children}
        </h4>
      );
  }
};

const Text: FC<ITextProps> = ({
  className = "",
  level = textLevel.XL,
  weight = fontWeight.REGULAR,
  size = "",
  children,
  color,
  ...rest
}) => {
  const classes = useStyles({ weight, level, size });

  const textClasses = cx({
    [classes.typography]: true,
    [classes.text]: true,
    [className || ""]: className,
  });

  return (
    <span className={textClasses} {...rest} style={{ color }}>
      {children}
    </span>
  );
};

const TextError: FC<ITextErrorProps> = ({ errorMsg, className = "" }) => {
  const classes = useStyles({});

  if (!errorMsg) {
    return null;
  }

  return <span className={cx(classes.error, className)}>{errorMsg}</span>;
};

export { Heading, Text, TextError };
