/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const ArrowLeftRight: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1663 5.99992L13.2738 11.8924L12.0955 10.7141L16.8097 5.99992L12.0955 1.28576L13.2738 0.107422L19.1663 5.99992ZM3.18967 5.99992L7.90384 10.7141L6.72551 11.8924L0.833008 5.99992L6.72551 0.107422L7.90384 1.28576L3.18967 5.99992Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeftRight;
