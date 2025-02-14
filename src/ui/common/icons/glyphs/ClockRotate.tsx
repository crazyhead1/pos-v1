/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const ClockRotate: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10H2C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2C7.25 2 4.824 3.387 3.385 5.5H6V7.5H0V1.5H2V4C3.824 1.57 6.729 0 10 0ZM11 5V9.585L14.243 12.828L12.828 14.243L9 10.413V5H11Z"
        fill={color}
      />
    </svg>
  );
};

export default ClockRotate;
