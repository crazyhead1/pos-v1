import React, { ReactElement, useEffect, useState } from "react";

// import "boxicons";
import { Drawer } from "../../common/components/drawer/Drawer";
import ButtonComponent, {
  btnSize,
} from "../../common/components/button-component";
import {
  Text,
  fontWeight,
  textLevel,
} from "../../common/components/typography";
import { btnType } from "../../common/components/button-component/ButtonComponent.types";
import { useStylesFromThemeFunction } from "./ListLayout";

interface ComponentProps {
  title?: string | null;
  drawerComponent?: ReactElement | null;
  listComponent?: ReactElement | null;
  closeDrawer?: boolean;
}

const ListLayout: React.FC<ComponentProps> = ({
  title = null,
  drawerComponent = null,
  listComponent = null,
  closeDrawer,
}) => {
  const classes = useStylesFromThemeFunction();
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawerView = () => {
    setShowDrawer(!showDrawer);
  };
  useEffect(() => {
    if (closeDrawer) {
      toggleDrawerView();
    }
  }, [closeDrawer]);
  return (
    <div className={classes.root}>
      <Drawer
        onClose={toggleDrawerView}
        open={showDrawer}
        subTitle=""
        title={`Add ${title ?? "item"}`}
      >
        {drawerComponent ?? <></>}
      </Drawer>
      <div className={classes.visibleConatiner}>
        <div className={classes.headerWrapper}>
          <Text
            className={classes.title}
            size={textLevel.XL}
            weight={fontWeight.BOLD}
          >
            {`${title?.[0].toLocaleUpperCase()}${title?.substring(
              1,
              title.length
            )} list`}
          </Text>
          {drawerComponent && (
            <ButtonComponent
              onClick={toggleDrawerView}
              variant={btnType.PRIMARY}
              size={btnSize.L}
            >
              <Text>Add {title ?? "item"}</Text>
            </ButtonComponent>
          )}
        </div>

        <div className={classes.listContainer}>
          {listComponent ? listComponent : <></>}
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
