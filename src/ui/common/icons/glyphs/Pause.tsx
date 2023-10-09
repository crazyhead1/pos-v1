/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Pause: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M3 0.75V11.25C2.99741 11.4481 2.91756 11.6374 2.77747 11.7775C2.63737 11.9176 2.44811 11.9974 2.25 12H0.75C0.551893 11.9974 0.362628 11.9176 0.222534 11.7775C0.0824389 11.6374 0.00258996 11.4481 0 11.25V0.75C0.00258996 0.551893 0.0824389 0.362628 0.222534 0.222534C0.362628 0.0824389 0.551893 0.00258996 0.75 0H2.25C2.44811 0.00258996 2.63737 0.0824389 2.77747 0.222534C2.91756 0.362628 2.99741 0.551893 3 0.75ZM9.25 0H7.75C7.55189 0.00258996 7.36263 0.0824389 7.22253 0.222534C7.08244 0.362628 7.00259 0.551893 7 0.75V11.25C7.00259 11.4481 7.08244 11.6374 7.22253 11.7775C7.36263 11.9176 7.55189 11.9974 7.75 12H9.25C9.44811 11.9974 9.63737 11.9176 9.77747 11.7775C9.91756 11.6374 9.99741 11.4481 10 11.25V0.75C9.99741 0.551893 9.91756 0.362628 9.77747 0.222534C9.63737 0.0824389 9.44811 0.00258996 9.25 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Pause;
