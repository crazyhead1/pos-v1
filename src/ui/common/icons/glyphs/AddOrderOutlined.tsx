/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const AddOrderOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 13.3333C15.6813 13.3333 18.6667 16.3187 18.6667 20C18.6667 23.6813 15.6813 26.6667 12 26.6667C8.31867 26.6667 5.33333 23.6813 5.33333 20C5.33333 16.3187 8.31867 13.3333 12 13.3333ZM13.3333 16H10.6667V18.6653L8 18.6667V21.3333L10.6667 21.332V24H13.3333V21.332L16 21.3333V18.6667L13.3333 18.6653V16ZM22.6667 0C23.4027 0 24 0.597333 24 1.33333V9.33333C24 10.0693 23.4027 10.6667 22.6667 10.6667H1.33333C0.597333 10.6667 0 10.0693 0 9.33333V1.33333C0 0.597333 0.597333 0 1.33333 0H22.6667ZM2.66667 2.66667V8H21.3333V2.66667H2.66667Z"
        fill={color}
      />
    </svg>
  );
};

export default AddOrderOutlined;
