/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const ListItem: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4 2H10.5V3H4V2ZM1.5 1.75H3V3.25H1.5V1.75ZM1.5 5.25H3V6.75H1.5V5.25ZM1.5 8.75H3V10.25H1.5V8.75ZM4 5.5H10.5V6.5H4V5.5ZM4 9H10.5V10H4V9Z"
        fill={color}
      />
    </svg>
  );
};

export default ListItem;
