/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const CalendarTodayOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M15 2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5V19.5C20 19.7652 19.8946 20.0196 19.7071 20.2071C19.5196 20.3946 19.2652 20.5 19 20.5H1C0.734784 20.5 0.48043 20.3946 0.292893 20.2071C0.105357 20.0196 0 19.7652 0 19.5V3.5C0 3.23478 0.105357 2.98043 0.292893 2.79289C0.48043 2.60536 0.734784 2.5 1 2.5H5V0.5H7V2.5H13V0.5H15V2.5ZM18 8.5V4.5H15V6.5H13V4.5H7V6.5H5V4.5H2V8.5H18ZM18 10.5H2V18.5H18V10.5ZM4 12.5H9V16.5H4V12.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarTodayOutlined;
