/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Minus: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M0.5 2C0.367392 2 0.240215 1.94732 0.146447 1.85355C0.0526785 1.75979 0 1.63261 0 1.5V0.5C0 0.367392 0.0526785 0.240214 0.146447 0.146446C0.240215 0.052678 0.367392 0 0.5 0H13.5C13.6326 0 13.7598 0.052678 13.8536 0.146446C13.9473 0.240214 14 0.367392 14 0.5V1.5C14 1.63261 13.9473 1.75979 13.8536 1.85355C13.7598 1.94732 13.6326 2 13.5 2H0.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Minus;
