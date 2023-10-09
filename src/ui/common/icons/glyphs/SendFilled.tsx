/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const SendFilled: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();

  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 10.8334H7.5V9.16675H2.5V1.53842C2.50001 1.46602 2.51889 1.39487 2.55478 1.33198C2.59066 1.26909 2.64232 1.21665 2.70465 1.1798C2.76698 1.14296 2.83783 1.12299 2.91023 1.12188C2.98262 1.12076 3.05406 1.13852 3.1175 1.17342L18.5025 9.63509C18.5678 9.67106 18.6223 9.7239 18.6602 9.7881C18.6982 9.8523 18.7182 9.92551 18.7182 10.0001C18.7182 10.0747 18.6982 10.1479 18.6602 10.2121C18.6223 10.2763 18.5678 10.3291 18.5025 10.3651L3.1175 18.8268C3.05406 18.8617 2.98262 18.8794 2.91023 18.8783C2.83783 18.8772 2.76698 18.8572 2.70465 18.8204C2.64232 18.7835 2.59066 18.7311 2.55478 18.6682C2.51889 18.6053 2.50001 18.5342 2.5 18.4618V10.8334Z"
        fill={color}
      />
    </svg>
  );
};

export default SendFilled;
