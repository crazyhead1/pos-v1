/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const DragArrows: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 9V3.828L7.172 5.657L5.757 4.243L10 0L14.243 4.243L12.828 5.657L11 3.828V9H16.172L14.343 7.172L15.757 5.757L20 10L15.757 14.243L14.343 12.828L16.172 11H11V16.172L12.828 14.343L14.243 15.757L10 20L5.757 15.757L7.172 14.343L9 16.172V11H3.828L5.657 12.828L4.243 14.243L0 10L4.243 5.757L5.657 7.172L3.828 9H9Z"
        fill={color}
      />
    </svg>
  );
};

export default DragArrows;
