/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const CalendarPrimaryOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
        d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V2H15C16.6569 2 18 3.34315 18 5V17C18 18.6569 16.6569 20 15 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V2H12V1ZM4 4C4 4.55228 4.44772 5 5 5C5.55228 5 6 4.55228 6 4H12C12 4.55228 12.4477 5 13 5C13.5523 5 14 4.55228 14 4H15C15.5523 4 16 4.44772 16 5V7H2V5C2 4.44772 2.44772 4 3 4H4ZM2 9V17C2 17.5523 2.44772 18 3 18H15C15.5523 18 16 17.5523 16 17V9H2Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarPrimaryOutlined;
