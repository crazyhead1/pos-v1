/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const MedicationOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle cx="11.5" cy="11.5" r="10.5" stroke={color} strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 6.5C9.94772 6.5 9.5 6.94772 9.5 7.5V9.5H7.5C6.94772 9.5 6.5 9.94771 6.5 10.5V12.5C6.5 13.0523 6.94772 13.5 7.5 13.5H9.5V15.5C9.5 16.0523 9.94772 16.5 10.5 16.5H12.5C13.0523 16.5 13.5 16.0523 13.5 15.5V13.5H15.5C16.0523 13.5 16.5 13.0523 16.5 12.5V10.5C16.5 9.94772 16.0523 9.5 15.5 9.5H13.5V7.5C13.5 6.94772 13.0523 6.5 12.5 6.5H10.5Z"
        fill={color}
      />
    </svg>
  );
};

export default MedicationOutlined;
