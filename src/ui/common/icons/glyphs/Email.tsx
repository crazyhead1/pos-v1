/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Email: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M22 17.007C21.9982 17.2696 21.8931 17.521 21.7075 17.7068C21.5219 17.8926 21.2706 17.9979 21.008 18H2.992C2.72881 17.9997 2.4765 17.895 2.29049 17.7088C2.10448 17.5226 2 17.2702 2 17.007V16H20V4.3L12 11.5L2 2.5V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H21C21.2652 0 21.5196 0.105357 21.7071 0.292893C21.8946 0.48043 22 0.734784 22 1V17.007ZM4.434 2L12 8.81L19.566 2H4.434ZM0 12H8V14H0V12ZM0 7H5V9H0V7Z"
        fill={color}
      />
    </svg>
  );
};

export default Email;
