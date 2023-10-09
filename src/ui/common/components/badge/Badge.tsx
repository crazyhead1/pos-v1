import { FC } from 'react';
import cx from 'clsx';

// icons
import { Icons } from '../../../icons';

// colors
import { colors } from '../../../colors';

// types
import { IBadgeProps, badgeType, badgeStyle } from './Badge.types';

// styles
import { useStyles } from './Badge.styles';

const Badge: FC<IBadgeProps> = ({
  className = '',
  variant = badgeType.FILLED,
  style = badgeStyle.CRITICAL,
  size,
  icon,
  children,
}) => {
  const classes = useStyles({ variant, size, style });

  const rootClasses = cx({
    [classes.root]: true,
    [className || '']: className,
  });

  return (
    <div className={rootClasses}>
      {icon && <Icons className={classes.icon} glyph={icon} color={colors.white} />}
      {children}
    </div>
  );
};

export { Badge };
