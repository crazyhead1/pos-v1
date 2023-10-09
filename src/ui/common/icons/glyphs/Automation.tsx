/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Automation: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.78504 2.51512C3.91315 3.82054 1.02195 8.82824 2.32737 13.7001C2.56916 14.6025 2.93719 15.4353 3.40677 16.1856C3.69975 16.6538 3.55775 17.2708 3.08958 17.5638C2.62142 17.8568 2.00439 17.7148 1.7114 17.2466C1.13762 16.3298 0.689287 15.3141 0.395522 14.2178C-1.19578 8.27894 2.32858 2.17457 8.2674 0.583266C14.2062 -1.00804 20.3106 2.51632 21.9019 8.45515L21.9019 8.45528L23.2889 8.08365C23.7371 7.96356 24.1143 8.25099 23.9679 8.60103L22.4308 12.2765C22.2844 12.6265 21.7241 12.7766 21.4223 12.5467L18.2533 10.1323C17.9515 9.90231 18.1345 9.46476 18.5827 9.34466L19.9701 8.97292L19.97 8.97278C18.6646 4.10089 13.6569 1.2097 8.78504 2.51512ZM8.80631 17.763H6.53662L10.1033 6.09033H13.3943L16.961 17.763H14.6913L13.9374 15.3312H9.54395L8.80631 17.763ZM11.7245 8.15737L10.1681 13.2723H13.3051L11.7245 8.15737Z"
        fill={color}
      />
    </svg>
  );
};

export default Automation;
