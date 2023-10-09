import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cx from 'clsx';

// mui
import MuiLink from '@mui/material/Link';

// types
import { ILinkProps, linkType } from './Link.types';

// styles
import { useStyles } from './Link.styles';

const Link: FC<ILinkProps> = ({
  className,
  variant = linkType.SELF,
  href = '',
  underline = 'none',
  children,
  onClick,
  ...rest
}) => {
  const classes = useStyles({ underline });

  const rootClasses = cx({
    [classes.root]: true,
    [className || '']: className,
  });

  if (variant === linkType.SELF) {
    return (
      <RouterLink className={rootClasses} to={href} onClick={onClick} {...rest}>
        {children}
      </RouterLink>
    );
  }
  if (variant === linkType.BLANK) {
    return (
      <MuiLink
        className={rootClasses}
        href={href}
        underline={underline}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        {...rest}
      >
        {children}
      </MuiLink>
    );
  }
  return (
    <MuiLink className={rootClasses} component="button" underline={underline} onClick={onClick} {...rest}>
      {children}
    </MuiLink>
  );
};

export { Link };
