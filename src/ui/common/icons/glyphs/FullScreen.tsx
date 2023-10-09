/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const FullScreen: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18 0H20V6H18V2H14V0H18ZM2 0H6V2H2V6H0V0H2ZM18 16V12H20V18H14V16H18ZM2 16H6V18H0V12H2V16Z"
        fill={color}
      />
    </svg>
  );
};

export default FullScreen;
