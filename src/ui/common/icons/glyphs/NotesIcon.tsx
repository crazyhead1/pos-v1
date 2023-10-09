/* eslint-disable max-len */
import { FC } from 'react';
// types
import cx from 'clsx';
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Notes: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
    >
      <path
        d="M39.6667 47.3333H2.33333C1.71449 47.3333 1.121 47.0875 0.683417 46.6499C0.245833 46.2123 0 45.6188 0 45V3.00001C0 2.38117 0.245833 1.78767 0.683417 1.35009C1.121 0.912504 1.71449 0.666672 2.33333 0.666672H39.6667C40.2855 0.666672 40.879 0.912504 41.3166 1.35009C41.7542 1.78767 42 2.38117 42 3.00001V45C42 45.6188 41.7542 46.2123 41.3166 46.6499C40.879 47.0875 40.2855 47.3333 39.6667 47.3333ZM37.3333 42.6667V5.33334H4.66667V42.6667H37.3333ZM11.6667 12.3333H30.3333V17H11.6667V12.3333ZM11.6667 21.6667H30.3333V26.3333H11.6667V21.6667ZM11.6667 31H23.3333V35.6667H11.6667V31Z"
        fill="#DD0374"
      />
    </svg>
  );
};

export default Notes;
