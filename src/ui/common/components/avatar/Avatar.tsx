import { FC, useMemo } from 'react';
import ReactAvatar from 'react-avatar';

import { S3_BUCKET_URL } from '../../../constants/CommonConstants';

// colors
import { colors } from '../../../colors';

// styles
import { useStyles } from './Avatar.styles';
import { IAvatarProps, avatarType } from './Avatar.types';

const Avatar: FC<IAvatarProps> = ({ src = '', name = '', size, variant = avatarType.SQUARE, ...rest }) => {
  const classes = useStyles({ variant });
  const transformSource = (source: string) => {
    if (source) {
      if (source.includes('http')) {
        return source;
      }
      return `${S3_BUCKET_URL}${source}`;
    }
    return '';
  };
  const url = useMemo(() => transformSource(src), [src]);
  return (
    <ReactAvatar
      className={classes.root}
      name={name}
      src={url}
      size={size}
      color={colors.primary}
      fgColor={colors.white}
      round={variant === avatarType.SQUARE ? '4px' : '100%'}
      {...rest}
    />
  );
};

export { Avatar };
