import React, { FC, useEffect, useState } from "react";
import cx from "clsx";

// mui
import Collapse from "@mui/material/Collapse";

// icons
import { Icons } from "../../../icons";

// colors
import { colors } from "../../../colors";

// types
import { ICollapsableProps, IiconPosition } from "./Collapsable.types";

// styles
import { useStyles } from "./Collapsable.styles";

const Collapsable: FC<ICollapsableProps> = ({
  className = "",
  label = "",
  iconPosition = IiconPosition.LEFT,
  children,
  active = false,
  open = false,
  headerHidden = false,
  iconHidden = false,
  labelExtend = null,
  subLabel = null,
  action = null,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(open || false);
  const classes = useStyles({ collapsed, active });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(open || false);
  }, [open]);

  return (
    <div className={cx(classes.root, className)}>
      {!headerHidden && (
        <div
          className={cx(classes.header, "collapsableHeader")}
          onClick={toggleCollapsed}
        >
          {!iconHidden && iconPosition === IiconPosition.LEFT && (
            <Icons
              className={cx(classes.chevronIcon, "collapsableIcon")}
              glyph="chevron-down"
              color={colors.neutral400}
            />
          )}
          <div className={classes.flexRow}>
            <span className={classes.label}>
              {label}
              <div className={classes.subLabel}>{subLabel && subLabel}</div>
            </span>
            {labelExtend}
          </div>
          <div className={classes.flexRow}>
            {!iconHidden && iconPosition === IiconPosition.RIGHT && (
              <Icons
                className={cx(classes.chevronIcon, "collapsable-icon")}
                glyph="chevron-down"
                color={colors.neutral400}
              />
            )}
            {action}
          </div>
        </div>
      )}
      <Collapse in={collapsed} {...rest}>
        {children}
      </Collapse>
    </div>
  );
};

export { Collapsable };
