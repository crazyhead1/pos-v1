/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const DataBlock: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.5C2 9.813 2.461 10.358 3.53 10.893C4.914 11.585 6.877 12 9 12C11.123 12 13.086 11.585 14.47 10.893C15.539 10.358 16 9.813 16 9.5V7.329C14.35 8.349 11.827 9 9 9C6.173 9 3.65 8.348 2 7.329V9.5ZM16 12.329C14.35 13.349 11.827 14 9 14C6.173 14 3.65 13.348 2 12.329V14.5C2 14.813 2.461 15.358 3.53 15.893C4.914 16.585 6.877 17 9 17C11.123 17 13.086 16.585 14.47 15.893C15.539 15.358 16 14.813 16 14.5V12.329ZM0 14.5V4.5C0 2.015 4.03 0 9 0C13.97 0 18 2.015 18 4.5V14.5C18 16.985 13.97 19 9 19C4.03 19 0 16.985 0 14.5ZM9 7C11.123 7 13.086 6.585 14.47 5.893C15.539 5.358 16 4.813 16 4.5C16 4.187 15.539 3.642 14.47 3.107C13.086 2.415 11.123 2 9 2C6.877 2 4.914 2.415 3.53 3.107C2.461 3.642 2 4.187 2 4.5C2 4.813 2.461 5.358 3.53 5.893C4.914 6.585 6.877 7 9 7Z"
        fill={color}
      />
    </svg>
  );
};

export default DataBlock;
