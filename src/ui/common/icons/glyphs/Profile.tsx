/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Profile: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666992 1.3275C0.668517 1.10865 0.756076 0.899181 0.910753 0.744348C1.06543 0.589515 1.27481 0.501746 1.49366 0.5H16.507C16.9637 0.5 17.3337 0.870833 17.3337 1.3275V14.6725C17.3321 14.8914 17.2446 15.1008 17.0899 15.2557C16.9352 15.4105 16.7258 15.4983 16.507 15.5H1.49366C1.27434 15.4998 1.06407 15.4125 0.909067 15.2573C0.754061 15.1022 0.666992 14.8918 0.666992 14.6725V1.3275ZM2.33366 2.16667V13.8333H15.667V2.16667H2.33366ZM4.00033 3.83333H9.00033V8.83333H4.00033V3.83333ZM5.66699 5.5V7.16667H7.33366V5.5H5.66699ZM4.00033 10.5H14.0003V12.1667H4.00033V10.5ZM10.667 3.83333H14.0003V5.5H10.667V3.83333ZM10.667 7.16667H14.0003V8.83333H10.667V7.16667Z"
        fill={color}
      />
    </svg>
  );
};

export default Profile;
