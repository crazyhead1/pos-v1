import React, { FC } from "react";
import cx from "clsx";
// mui
import { Drawer as MuiDrawer } from "@mui/material";

// components
import {
  fontWeight,
  Heading,
  headingLevel,
  Text,
  textLevel,
} from "../typography";
import { btnType } from "../button-component/ButtonComponent.types";

// types
import { IDrawerProps, drawerPosition, drawerType } from "./Drawer.types";

// styles
import { useStyles } from "./Drawer.styles";
import ButtonComponent from "../button-component";
import { Icons } from "../../icons/Icons";

const Drawer: FC<IDrawerProps> = ({
  children,
  className = "",
  paperClassName = "",
  position = drawerPosition.RIGHT,
  variant = drawerType.NORMAL,
  open,
  subtitleComponent,
  disableSubmit,
  onClose,
  title = "Form",
  titleIconComponent = null,
  subTitle = null,
  submitBtnTitle = "Confirm",
  onSubmit,
  narrowHeader,
  footer,
  header,
}) => {
  const classes = useStyles();
  return (
    <MuiDrawer
      anchor={position}
      open={open}
      onClose={onClose}
      className={cx({
        [classes.root]: true,
        [classes.formRoot]: variant === drawerType.FORM,
        [classes.vertical]:
          position === drawerPosition.LEFT || position === drawerPosition.RIGHT,
        [classes.horizontal]:
          position === drawerPosition.TOP || position === drawerPosition.BOTTOM,
        [className]: true,
      })}
      classes={{ paper: paperClassName }}
    >
      {variant === drawerType.FORM ? (
        <>
          <div>
            {header || (
              <div
                className={cx({
                  drawerHeader: true,
                  [classes.drawerHeader]: true,
                  [classes.bigDrawerHeader]: subTitle,
                  [classes.biggerDrawerHeader]: subtitleComponent,
                })}
              >
                <div
                  className={cx({
                    [classes.topContentWrapperfortitle]:
                      !narrowHeader &&
                      !subtitleComponent &&
                      !subTitle &&
                      !titleIconComponent,
                    [classes.topContentWrapper]:
                      !narrowHeader &&
                      subtitleComponent &&
                      subtitleComponent &&
                      subTitle &&
                      titleIconComponent,
                    [classes.topContentWrapper1]: narrowHeader,
                  })}
                >
                  <div className={classes.row}>
                    <div>{titleIconComponent && titleIconComponent}</div>
                    <div>
                      <Heading
                        className={classes.headTitle}
                        level={headingLevel.M}
                        weight={fontWeight.BOLD}
                      >
                        <div className={classes.row}>{title}</div>
                      </Heading>
                      {subTitle && (
                        <Text
                          className={classes.headSubTitle}
                          weight={fontWeight.MEDIUM}
                          level={textLevel.M}
                        >
                          {subTitle}
                        </Text>
                      )}
                    </div>
                  </div>
                  {subtitleComponent && (
                    <div className={classes.subtitleComponent}>
                      {subtitleComponent}
                    </div>
                  )}
                </div>

                <Icons
                  onClick={onClose}
                  className={classes.closeIcon}
                  glyph="close"
                />
              </div>
            )}
            <div
              className={cx({
                [classes.drawerBody]: true,
                drawerBody: true,
              })}
            >
              {children}
            </div>
          </div>
          {footer || (
            <div className={cx(classes.drawerFooter, "drawer-footer")}>
              <ButtonComponent
                onClick={onClose}
                className={classes.drawerCancelBtn}
                variant={btnType.TEXT}
              >
                <Text>Cancel</Text>
              </ButtonComponent>
              <ButtonComponent
                className={classes.drawerUpdateBtn}
                variant={btnType.PRIMARY}
                onClick={onSubmit}
                disabled={disableSubmit}
              >
                <Text>{submitBtnTitle}</Text>
              </ButtonComponent>
            </div>
          )}
        </>
      ) : (
        children
      )}
    </MuiDrawer>
  );
};

export { Drawer };
