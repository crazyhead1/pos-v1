/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const SwitchAlternateOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9.00008 17.3334C4.39758 17.3334 0.666748 13.6026 0.666748 9.00008C0.666748 4.39758 4.39758 0.666748 9.00008 0.666748C13.6026 0.666748 17.3334 4.39758 17.3334 9.00008C17.3334 13.6026 13.6026 17.3334 9.00008 17.3334ZM9.00008 15.6667C10.7682 15.6667 12.4639 14.9644 13.7141 13.7141C14.9644 12.4639 15.6667 10.7682 15.6667 9.00008C15.6667 7.23197 14.9644 5.53628 13.7141 4.28604C12.4639 3.03579 10.7682 2.33341 9.00008 2.33341C7.23197 2.33341 5.53628 3.03579 4.28604 4.28604C3.03579 5.53628 2.33341 7.23197 2.33341 9.00008C2.33341 10.7682 3.03579 12.4639 4.28604 13.7141C5.53628 14.9644 7.23197 15.6667 9.00008 15.6667ZM4.83342 9.83342H12.3334V11.5001H9.00008V14.0001L4.83342 9.83342ZM9.00008 6.50008V4.00008L13.1667 8.16675H5.66675V6.50008H9.00008Z"
        fill={color}
      />
    </svg>
  );
};

export default SwitchAlternateOutlined;
