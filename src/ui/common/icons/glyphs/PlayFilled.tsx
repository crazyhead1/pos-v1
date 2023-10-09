/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const PlayFilled: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M11 6.85999V7.13999C10.9996 7.27104 10.9653 7.39976 10.9005 7.51365C10.8357 7.62754 10.7425 7.72274 10.63 7.78999L1.68 13C1.14 13.32 0.86 13.32 0.62 13.18L0.37 13.04C0.260366 12.9745 0.168997 12.8825 0.10433 12.7724C0.039662 12.6623 0.00378091 12.5376 0 12.41V1.58999C0.000397587 1.45893 0.0346763 1.33021 0.0995073 1.21632C0.164338 1.10243 0.257519 1.00724 0.37 0.939986L0.62 0.799986C0.86 0.659986 1.14 0.659986 1.84 1.06999L10.63 6.20999C10.7425 6.27724 10.8357 6.37243 10.9005 6.48632C10.9653 6.60021 10.9996 6.72893 11 6.85999Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayFilled;
