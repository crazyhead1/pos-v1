/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const SearchOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.0258 12.8476L17.595 16.4159L16.4158 17.5951L12.8475 14.0259C11.5197 15.0903 9.86829 15.6692 8.16663 15.6667C4.02663 15.6667 0.666626 12.3067 0.666626 8.16675C0.666626 4.02675 4.02663 0.666748 8.16663 0.666748C12.3066 0.666748 15.6666 4.02675 15.6666 8.16675C15.669 9.86842 15.0901 11.5199 14.0258 12.8476ZM12.3541 12.2292C13.4117 11.1417 14.0023 9.68377 14 8.16675C14 4.94341 11.3891 2.33341 8.16663 2.33341C4.94329 2.33341 2.33329 4.94341 2.33329 8.16675C2.33329 11.3892 4.94329 14.0001 8.16663 14.0001C9.68365 14.0025 11.1415 13.4118 12.2291 12.3542L12.3541 12.2292Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchOutlined;
