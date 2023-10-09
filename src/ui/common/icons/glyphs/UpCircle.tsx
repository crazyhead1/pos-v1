/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const UpCircle: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M16.9997 0.333374C26.1997 0.333374 33.6663 7.80004 33.6663 17C33.6663 26.2 26.1997 33.6667 16.9997 33.6667C7.79967 33.6667 0.333008 26.2 0.333008 17C0.333008 7.80004 7.79967 0.333374 16.9997 0.333374ZM18.6663 17H23.6663L16.9997 10.3334L10.333 17H15.333V23.6667H18.6663V17Z"
        fill={color}
      />
    </svg>
  );
};

export default UpCircle;
