/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const PlusCircleFilled: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 18.3334C5.39746 18.3334 1.66663 14.6025 1.66663 10C1.66663 5.39752 5.39746 1.66669 9.99996 1.66669C14.6025 1.66669 18.3333 5.39752 18.3333 10C18.3333 14.6025 14.6025 18.3334 9.99996 18.3334ZM9.16663 9.16669H5.83329V10.8334H9.16663V14.1667H10.8333V10.8334H14.1666V9.16669H10.8333V5.83335H9.16663V9.16669Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusCircleFilled;
