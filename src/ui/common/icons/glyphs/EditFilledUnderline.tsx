/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const EditFilledUnderline: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
        d="M3.414 14L13.556 3.858L12.142 2.444L2 12.586V14H3.414ZM4.243 16H0V11.757L11.435 0.322C11.6225 0.134528 11.8768 0.029213 12.142 0.029213C12.4072 0.029213 12.6615 0.134528 12.849 0.322L15.678 3.151C15.8655 3.33853 15.9708 3.59284 15.9708 3.858C15.9708 4.12316 15.8655 4.37747 15.678 4.565L4.243 16ZM0 18H18V20H0V18Z"
        fill={color}
      />
    </svg>
  );
};

export default EditFilledUnderline;
