/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Interference: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C7.91083 12 8.76477 11.7565 9.50027 11.3309C8.56068 10.1394 8 8.63518 8 7C8 5.36482 8.56068 3.86059 9.50027 2.66906C8.76477 2.24354 7.91083 2 7 2ZM7 14C8.48725 14 9.86617 13.5362 11 12.7453C12.1338 13.5362 13.5128 14 15 14C18.866 14 22 10.866 22 7C22 3.13401 18.866 0 15 0C13.5128 0 12.1338 0.463815 11 1.25469C9.86617 0.463815 8.48725 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM15 2C14.0892 2 13.2352 2.24355 12.4997 2.66907C13.4393 3.86059 14 5.36482 14 7C14 8.63518 13.4393 10.1394 12.4997 11.3309C13.2352 11.7565 14.0892 12 15 12C17.7614 12 20 9.76142 20 7C20 4.23858 17.7614 2 15 2Z"
        fill={color}
      />
    </svg>
  );
};

export default Interference;
