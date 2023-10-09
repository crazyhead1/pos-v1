/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Export: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      onClick={onClick}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 17H18V19H0V17ZM10 3.828V15H8V3.828L1.929 9.9L0.515 8.486L9 0L17.485 8.485L16.071 9.899L10 3.83V3.828Z"
        fill={color}
      />
    </svg>
  );
};

export default Export;
