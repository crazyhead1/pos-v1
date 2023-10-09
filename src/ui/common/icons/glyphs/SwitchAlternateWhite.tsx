/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const SwitchAlternateWhite: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M8.99999 17.3333C4.39749 17.3333 0.666656 13.6025 0.666656 8.99996C0.666656 4.39746 4.39749 0.666626 8.99999 0.666626C13.6025 0.666626 17.3333 4.39746 17.3333 8.99996C17.3333 13.6025 13.6025 17.3333 8.99999 17.3333ZM8.99999 6.49996H5.66666V8.16663H13.1667L8.99999 3.99996V6.49996ZM4.83332 9.83329L8.99999 14V11.5H12.3333V9.83329H4.83332Z"
        fill="white"
      />
    </svg>
  );
};

export default SwitchAlternateWhite;
