/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const FilterFilled: FC<IGlyphIcon> = ({ className, color, onClick }) => {
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
        d="M17 0H1C0.734784 0 0.48043 0.105357 0.292894 0.292893C0.105357 0.48043 6.2793e-07 0.734784 6.2793e-07 1V2.17C-0.000208492 2.43391 0.0518167 2.69526 0.153078 2.93897C0.254338 3.18268 0.402832 3.40394 0.590001 3.59L6.41 9.41C6.59717 9.59606 6.74566 9.81732 6.84692 10.061C6.94818 10.3047 7.00021 10.5661 7 10.83V17.5C7 17.5929 7.02586 17.6839 7.07468 17.7629C7.12349 17.8419 7.19334 17.9057 7.27639 17.9472C7.35945 17.9887 7.45242 18.0063 7.5449 17.998C7.63738 17.9896 7.72572 17.9557 7.8 17.9L10.2 16.1C10.4484 15.9137 10.65 15.6721 10.7889 15.3944C10.9277 15.1167 11 14.8105 11 14.5V10.83C10.9998 10.5661 11.0518 10.3047 11.1531 10.061C11.2543 9.81732 11.4028 9.59606 11.59 9.41L17.41 3.59C17.5972 3.40394 17.7457 3.18268 17.8469 2.93897C17.9482 2.69526 18.0002 2.43391 18 2.17V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0ZM16 2.17L13.17 5H4.83L2 2.17V2H16V2.17Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterFilled;
