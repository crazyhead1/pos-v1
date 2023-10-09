import React, { useState } from "react";
import { useStylesFromThemeFunction, ComponentProps } from "./Colors.style";
import "boxicons";
import { COLOR_GRIDS } from "../../common/themes/color-grads";
import ButtonComponent from "../../common/components/button-component";

export const ColorList: React.FC<ComponentProps> = ({}) => {
  const classes = useStylesFromThemeFunction();
  const [isHovering, setIsHovering] = useState(0);

  const handleMouseOver = (index) => {
    setIsHovering(index);
  };

  const handleMouseOut = (index) => {
    setIsHovering(index);
  };
  const handleThemeSelect = (colorGridKey: string) => {
    console.log(colorGridKey, " are selected");
  };

  return (
    <div className={classes.grid}>
      {Object.keys(COLOR_GRIDS).map((colorGridKey) => {
        return (
          <div className={classes.row}>
            {/* <div className={classes.color}>
              <ButtonComponent
                variant="primary-outline"
                onClick={() => handleThemeSelect(colorGridKey)}
              >
                <p>Select</p>
              </ButtonComponent>
            </div> */}
            {Object.values(COLOR_GRIDS[colorGridKey]).map((color, index) => {
              return (
                <div
                  className={classes.color}
                  style={{ backgroundColor: color as string }}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                >
                  {isHovering === index && (
                    <div
                      className={
                        index <= 4
                          ? classes.colorTitle
                          : classes.whiteColorTitle
                      }
                    >
                      {(index + 1) * 10}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
