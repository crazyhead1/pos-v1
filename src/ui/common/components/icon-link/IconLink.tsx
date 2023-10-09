import { FC } from 'react';
import cx from 'clsx';

// icons
import { Icons } from '../../../icons';

// components
import { Link } from '../../atoms/link';

// styles
import { useStyles } from './IconLink.styles';

// types
import { IIconLinkProps, iconLinkPosition, iconLinkStyle, iconLinkType } from './IconLink.types';

const IconLink: FC<IIconLinkProps> = ({
  className = '',
  variant = iconLinkType.SELF,
  style = iconLinkStyle.PRIMARY,
  textStyle = iconLinkStyle.NEUTRAL_700,
  icon,
  iconPosition = iconLinkPosition.LEFT,
  children,
  ...rest
}) => {
  const classes = useStyles({ style, iconPosition, textStyle });

  return (
    <Link
      className={cx({
        [classes.root]: true,
        [className || '']: className,
      })}
      variant={variant}
      {...rest}
    >
      <Icons className={classes.icon} glyph={icon} color="currentColor" />
      {children && <div className={classes.text}>{children}</div>}
    </Link>
  );
};

export { IconLink };
