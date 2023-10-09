/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const DeleteOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M16 2.5V3.5C16 3.63261 15.9473 3.75979 15.8536 3.85355C15.7598 3.94732 15.6326 4 15.5 4H0.5C0.367392 4 0.240215 3.94732 0.146447 3.85355C0.0526785 3.75979 0 3.63261 0 3.5V2.5C0 2.36739 0.0526785 2.24021 0.146447 2.14645C0.240215 2.05268 0.367392 2 0.5 2H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H10C10.2652 0 10.5196 0.105357 10.7071 0.292893C10.8946 0.48043 11 0.734784 11 1V2H15.5C15.6326 2 15.7598 2.05268 15.8536 2.14645C15.9473 2.24021 16 2.36739 16 2.5ZM12.28 16H3.72L3 6H1L1.87 18.14C1.90549 18.6458 2.13177 19.1192 2.50307 19.4646C2.87436 19.8099 3.36296 20.0012 3.87 20H12.15C12.657 20.0012 13.1456 19.8099 13.5169 19.4646C13.8882 19.1192 14.1145 18.6458 14.15 18.14L15 6H13L12.28 16Z"
        fill={color}
      />
    </svg>
  );
};

export default DeleteOutlined;
