/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const AddImageOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.008 3C21.556 3 22 3.445 22 3.993V13H20V5H4V18.999L14 9L17 12V14.829L14 11.829L6.827 19H14V21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008ZM8 7C8.53043 7 9.03914 7.21071 9.41421 7.58579C9.78929 7.96086 10 8.46957 10 9C10 9.53043 9.78929 10.0391 9.41421 10.4142C9.03914 10.7893 8.53043 11 8 11C7.46957 11 6.96086 10.7893 6.58579 10.4142C6.21071 10.0391 6 9.53043 6 9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7Z"
        fill={color}
      />
    </svg>
  );
};

export default AddImageOutlined;
