/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const User: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5ZM9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0ZM5.5 12C4.17392 12 2.90215 12.5268 1.96447 13.4645C1.02678 14.4021 0.5 15.6739 0.5 17V19C0.5 19.5523 0.947715 20 1.5 20C2.05228 20 2.5 19.5523 2.5 19V17C2.5 16.2044 2.81607 15.4413 3.37868 14.8787C3.94129 14.3161 4.70435 14 5.5 14H12.5C13.2956 14 14.0587 14.3161 14.6213 14.8787C15.1839 15.4413 15.5 16.2043 15.5 17V19C15.5 19.5523 15.9477 20 16.5 20C17.0523 20 17.5 19.5523 17.5 19V17C17.5 15.6739 16.9732 14.4021 16.0355 13.4645C15.0979 12.5268 13.8261 12 12.5 12H5.5Z"
        fill={color}
      />
    </svg>
  );
};

export default User;
