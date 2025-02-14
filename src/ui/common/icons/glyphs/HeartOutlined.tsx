/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const HeartOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M20.84 3.61C20.3292 3.099 19.7228 2.69365 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69365 13.5708 3.099 13.06 3.61L12 4.67L10.94 3.61C9.9083 2.57831 8.50903 1.99871 7.05 1.99871C5.59096 1.99871 4.19169 2.57831 3.16 3.61C2.1283 4.64169 1.54871 6.04097 1.54871 7.5C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60536C22.3095 8.9379 22.4518 8.22249 22.4518 7.5C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72719 21.351 4.12076 20.84 3.61V3.61Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartOutlined;
