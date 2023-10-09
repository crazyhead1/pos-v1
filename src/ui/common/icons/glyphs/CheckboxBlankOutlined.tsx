/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const CheckboxBlankOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke={color} />
      <path
        d="M9.43069 14.7154C9.2354 14.9105 8.91895 14.9104 8.72375 14.7152L6.10714 12.0986C5.77305 11.7645 5.23169 11.7635 4.89643 12.0964C4.55948 12.431 4.55852 12.9757 4.89428 13.3114L8.37003 16.7872C8.76055 17.1777 9.39372 17.1777 9.78424 16.7872L18.7584 7.813C19.0922 7.47918 19.0922 6.93796 18.7584 6.60414C18.4247 6.27044 17.8837 6.27031 17.5499 6.60386L9.43069 14.7154Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckboxBlankOutlined;
