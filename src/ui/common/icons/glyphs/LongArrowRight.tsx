/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const LongArrowRight: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M0 4.5V3.5C0 3.36739 0.0526785 3.24021 0.146447 3.14644C0.240215 3.05267 0.367392 3 0.5 3H16V0.999996C16.0014 0.902133 16.0314 0.806825 16.0865 0.725888C16.1415 0.644951 16.2191 0.581945 16.3096 0.54468C16.4001 0.507415 16.4995 0.49753 16.5956 0.516251C16.6917 0.534972 16.7801 0.581475 16.85 0.649996L19.85 3.65C19.9422 3.74515 19.9938 3.87247 19.9938 4.005C19.9938 4.13752 19.9422 4.26485 19.85 4.36L16.85 7.36C16.7795 7.4291 16.6901 7.47579 16.5931 7.49418C16.4962 7.51257 16.3959 7.50184 16.305 7.46334C16.2141 7.42484 16.1366 7.3603 16.0823 7.27784C16.0281 7.19539 15.9994 7.09871 16 7V5H0.5C0.367392 5 0.240215 4.94732 0.146447 4.85355C0.0526785 4.75978 0 4.6326 0 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LongArrowRight;
