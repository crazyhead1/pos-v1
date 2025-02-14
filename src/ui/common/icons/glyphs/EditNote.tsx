/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const EditNote: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M18 4.757L16 6.757V2H7.00002V7H2.00002V18H16V15.243L18 13.243V19.008C17.9998 19.2712 17.895 19.5235 17.7088 19.7095C17.5226 19.8955 17.2702 20 17.007 20H0.993025C0.861702 19.9991 0.731845 19.9723 0.61087 19.9212C0.489895 19.8701 0.38017 19.7957 0.287961 19.7022C0.195752 19.6087 0.122864 19.4979 0.0734597 19.3762C0.0240555 19.2545 -0.000897804 19.1243 2.4673e-05 18.993V6L6.00303 0H16.998C17.55 0 18 0.455 18 0.992V4.757ZM18.778 6.807L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808V6.807Z"
        fill={color}
      />
    </svg>
  );
};

export default EditNote;
