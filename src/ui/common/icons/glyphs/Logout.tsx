/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Logout: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.5H4V18.5H16V2.5H4V7.5H2V1.5C2 1.23478 2.10536 0.98043 2.29289 0.792893C2.48043 0.605357 2.73478 0.5 3 0.5H17C17.2652 0.5 17.5196 0.605357 17.7071 0.792893C17.8946 0.98043 18 1.23478 18 1.5V19.5C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5H3C2.73478 20.5 2.48043 20.3946 2.29289 20.2071C2.10536 20.0196 2 19.7652 2 19.5V13.5ZM8 9.5V6.5L13 10.5L8 14.5V11.5H0V9.5H8Z"
        fill={color}
      />
    </svg>
  );
};

export default Logout;
