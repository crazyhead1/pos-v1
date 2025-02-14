/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const LabBottleOutlined: FC<IGlyphIcon> = ({ className, color, onClick, ...rest }) => {
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16 2V4H15V7.243C15 8.401 15.251 9.544 15.736 10.595L20.018 19.871C20.365 20.624 20.036 21.515 19.284 21.861C19.087 21.953 18.873 22 18.656 22H5.34399C4.51599 22 3.84399 21.328 3.84399 20.5C3.84399 20.283 3.89099 20.068 3.98199 19.871L8.26399 10.595C8.74899 9.545 8.99999 8.401 8.99999 7.243V4H7.99999V2H16ZM13.388 10.001H10.612C10.508 10.364 10.382 10.722 10.238 11.072L10.08 11.433L6.12499 20H17.874L13.92 11.433C13.706 10.969 13.528 10.49 13.388 10.001ZM11 7.243C11 7.496 10.99 7.749 10.971 8.001H13.029C13.019 7.88 13.013 7.759 13.008 7.637L13 7.243V4H11V7.243Z"
        fill={color}
      />
    </svg>
  );
};

export default LabBottleOutlined;
