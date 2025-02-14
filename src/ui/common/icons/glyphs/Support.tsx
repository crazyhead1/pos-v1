/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Support: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();

  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM7.197 14.682l-2.175 2.174a8.55 8.55 0 0 0 1.818 1.899l.305.223 2.173-2.175a5.527 5.527 0 0 1-1.98-1.883l-.14-.238h-.001Zm9.606 0a5.527 5.527 0 0 1-1.883 1.98l-.238.14 2.174 2.176a8.55 8.55 0 0 0 1.899-1.818l.223-.304-2.175-2.174ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7.145 5.022a8.549 8.549 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.527 5.527 0 0 1 1.883-1.98l.238-.14-2.173-2.176Zm9.71 0-2.173 2.175a5.527 5.527 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.549 8.549 0 0 0-1.818-1.9l-.304-.223h-.001Z"
        fill={color}
      />
    </svg>
  );
};

export default Support;
