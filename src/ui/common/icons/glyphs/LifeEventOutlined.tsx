/* eslint-disable max-len */
import { FC } from 'react';
import cx from 'clsx';

// types
import { IGlyphIcon } from './shared';

// styles
import { useStyles } from './shared/styles';

const LifeEventOutlined: FC<IGlyphIcon> = ({ className, color, onClick }) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 1V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 1V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 9H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.80979 11.5854C9.86966 11.4011 10.1303 11.4011 10.1902 11.5854L10.8532 13.6257C10.8799 13.7081 10.9567 13.7639 11.0434 13.7639H13.1887C13.3824 13.7639 13.463 14.0119 13.3062 14.1257L11.5706 15.3867C11.5005 15.4377 11.4712 15.5279 11.498 15.6103L12.1609 17.6507C12.2208 17.8349 12.0099 17.9881 11.8532 17.8743L10.1176 16.6133C10.0475 16.5623 9.95254 16.5623 9.88244 16.6133L8.14684 17.8743C7.9901 17.9881 7.7792 17.8349 7.83907 17.6507L8.50201 15.6103C8.52879 15.5279 8.49946 15.4377 8.42936 15.3867L6.69375 14.1257C6.53701 14.0119 6.61757 13.7639 6.81131 13.7639H8.95664C9.04328 13.7639 9.12007 13.7081 9.14685 13.6257L9.80979 11.5854Z"
        fill={color}
      />
    </svg>
  );
};

export default LifeEventOutlined;
