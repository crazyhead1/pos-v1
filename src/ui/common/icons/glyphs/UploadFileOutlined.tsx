/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const UploadFileOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M5.33333 25.3333H26.6667V16H29.3333V26.6667C29.3333 27.0203 29.1929 27.3594 28.9428 27.6095C28.6928 27.8595 28.3536 28 28 28H4C3.64638 28 3.30724 27.8595 3.05719 27.6095C2.80714 27.3594 2.66667 27.0203 2.66667 26.6667V16H5.33333V25.3333ZM17.3333 12V21.3333H14.6667V12H8L16 4L24 12H17.3333Z"
        fill={color}
      />
    </svg>
  );
};

export default UploadFileOutlined;
