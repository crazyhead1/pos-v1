/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const List2: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z"
        fill={color}
      />
    </svg>
  );
};

export default List2;
