/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Clock: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.00004 13.6667C3.31804 13.6667 0.333374 10.682 0.333374 7.00001C0.333374 3.31801 3.31804 0.333344 7.00004 0.333344C10.682 0.333344 13.6667 3.31801 13.6667 7.00001C13.6667 10.682 10.682 13.6667 7.00004 13.6667ZM7.00004 12.3333C8.41453 12.3333 9.77108 11.7714 10.7713 10.7712C11.7715 9.77105 12.3334 8.4145 12.3334 7.00001C12.3334 5.58552 11.7715 4.22897 10.7713 3.22877C9.77108 2.22858 8.41453 1.66668 7.00004 1.66668C5.58555 1.66668 4.229 2.22858 3.2288 3.22877C2.22861 4.22897 1.66671 5.58552 1.66671 7.00001C1.66671 8.4145 2.22861 9.77105 3.2288 10.7712C4.229 11.7714 5.58555 12.3333 7.00004 12.3333ZM7.66671 7.00001H10.3334V8.33334H6.33337V3.66668H7.66671V7.00001Z"
        fill={color}
      />
    </svg>
  );
};

export default Clock;
