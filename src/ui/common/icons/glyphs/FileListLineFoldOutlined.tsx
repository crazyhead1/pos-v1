/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const FileListLineFoldOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
    const classes = useStyles();
    return (
      <svg
        className={cx({
          [classes.root]: true,
          [className || '']: className,
        })}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M18 6V18.993C18.0009 19.1243 17.976 19.2545 17.9266 19.3762C17.8772 19.4979 17.8043 19.6087 17.7121 19.7022C17.6199 19.7957 17.5101 19.8701 17.3892 19.9212C17.2682 19.9723 17.1383 19.9991 17.007 20H0.993C0.729813 20 0.477391 19.8955 0.291196 19.7095C0.105001 19.5235 0.000265042 19.2712 0 19.008V0.992C0 0.455 0.449 0 1.002 0H11.997L18 6ZM16 7H11V2H2V18H16V7ZM5 5H8V7H5V5ZM5 9H13V11H5V9ZM5 13H13V15H5V13Z"
          fill={color}
        />
      </svg>
    );
  };
  
  export default FileListLineFoldOutlined;
  