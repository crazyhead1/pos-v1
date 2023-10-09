/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const Pharmacy: FC<IGlyphIcon> = ({ className, color = '#333C43', onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.778 2.22209C20.121 4.56509 20.121 8.36409 17.778 10.7071L10.708 17.7781C8.36397 20.1211 4.56497 20.1211 2.22197 17.7781C-0.121028 15.4351 -0.121028 11.6361 2.22197 9.29309L9.29197 2.22209C11.636 -0.120906 15.435 -0.120906 17.778 2.22209ZM12.122 13.5351L6.46497 7.87809L3.63597 10.7081C2.07397 12.2691 2.07397 14.8021 3.63597 16.3641C5.19797 17.9261 7.73097 17.9261 9.29297 16.3641L12.122 13.5341V13.5351ZM16.364 3.63609C14.802 2.07409 12.269 2.07409 10.707 3.63609L7.87997 6.46409L13.537 12.1211L16.365 9.29309C17.927 7.73109 17.927 5.19809 16.365 3.63609H16.364Z"
        fill={color}
      />
    </svg>
  );
};

export default Pharmacy;
