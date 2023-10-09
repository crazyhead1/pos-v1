/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Diagnoses: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx(classes.root, className)}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4 0V2H2V6C2 8.21 3.79 10 6 10C8.21 10 10 8.21 10 6V2H8V0H11C11.552 0 12 0.448 12 1V6C12 8.973 9.838 11.44 7 11.917V13.5C7 15.433 8.567 17 10.5 17C11.997 17 13.275 16.06 13.775 14.737C12.728 14.27 12 13.22 12 12C12 10.343 13.343 9 15 9C16.657 9 18 10.343 18 12C18 13.371 17.08 14.527 15.824 14.885C15.21 17.252 13.059 19 10.5 19C7.462 19 5 16.538 5 13.5V11.917C2.162 11.441 0 8.973 0 6V1C0 0.448 0.448 0 1 0H4ZM15 11C14.448 11 14 11.448 14 12C14 12.552 14.448 13 15 13C15.552 13 16 12.552 16 12C16 11.448 15.552 11 15 11Z"
        fill={color}
      />
    </svg>
  );
};

export default Diagnoses;
