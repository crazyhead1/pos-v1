/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const GroupOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 19V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 1.13C16.8604 1.3503 17.623 1.8507 18.1676 2.55231C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89317 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GroupOutlined;
