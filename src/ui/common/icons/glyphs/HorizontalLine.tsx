/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const HorizontalLine: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      width="20"
      height="2"
      viewBox="0 0 20 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(classes.root, className)}
      onClick={onClick}
    >
      <path d="M0 0H2V2H0V0ZM4 0H16V2H4V0ZM18 0H20V2H18V0Z" fill={color} />
    </svg>
  );
};

export default HorizontalLine;
