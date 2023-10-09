/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Pointer: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="14"
      height="21"
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.90997 11.3598L11 19.8538L8.18197 20.8798L5.08997 12.3858L0.917969 15.5418L2.40797 0.632812L13.134 11.0958L7.90997 11.3598Z"
        fill={color}
      />
    </svg>
  );
};

export default Pointer;
