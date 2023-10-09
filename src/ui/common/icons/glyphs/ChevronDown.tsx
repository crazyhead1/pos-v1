/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const ChevronDown: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
      <path
        d="M12.0002 13.1722L16.9502 8.22217L18.3642 9.63617L12.0002 16.0002L5.63623 9.63617L7.05023 8.22217L12.0002 13.1722Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;
