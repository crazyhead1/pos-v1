/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const PlusCircleOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
        d="M9.16667 9.16669V5.83335H10.8333V9.16669H14.1667V10.8334H10.8333V14.1667H9.16667V10.8334H5.83334V9.16669H9.16667ZM10 18.3334C5.39751 18.3334 1.66667 14.6025 1.66667 10C1.66667 5.39752 5.39751 1.66669 10 1.66669C14.6025 1.66669 18.3333 5.39752 18.3333 10C18.3333 14.6025 14.6025 18.3334 10 18.3334ZM10 16.6667C11.7681 16.6667 13.4638 15.9643 14.7141 14.7141C15.9643 13.4638 16.6667 11.7681 16.6667 10C16.6667 8.23191 15.9643 6.53622 14.7141 5.28598C13.4638 4.03573 11.7681 3.33335 10 3.33335C8.2319 3.33335 6.5362 4.03573 5.28596 5.28598C4.03572 6.53622 3.33334 8.23191 3.33334 10C3.33334 11.7681 4.03572 13.4638 5.28596 14.7141C6.5362 15.9643 8.2319 16.6667 10 16.6667Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusCircleOutlined;
