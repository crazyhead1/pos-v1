/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const AOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.16667 2.16667V13.8333H13.8333V2.16667H2.16667ZM1.33333 0.5H14.6667C14.8877 0.5 15.0996 0.587797 15.2559 0.744078C15.4122 0.900358 15.5 1.11232 15.5 1.33333V14.6667C15.5 14.8877 15.4122 15.0996 15.2559 15.2559C15.0996 15.4122 14.8877 15.5 14.6667 15.5H1.33333C1.11232 15.5 0.900358 15.4122 0.744078 15.2559C0.587797 15.0996 0.5 14.8877 0.5 14.6667V1.33333C0.5 1.11232 0.587797 0.900358 0.744078 0.744078C0.900358 0.587797 1.11232 0.5 1.33333 0.5ZM6.22417 10.5L5.54083 12.1667H3.69417L7.16667 3.83333H8.83333L12.3058 12.1667H10.4583L9.775 10.5H6.225H6.22417ZM6.9075 8.83333H9.0925L8 6.16667L6.9075 8.83333Z"
        fill={color}
      />
    </svg>
  );
};

export default AOutlined;
