import { makeStyles } from '@mui/styles';

// colors
import { colors } from '../../../colors';

// types
import { iconLinkPosition, iconLinkStyle } from './IconLink.types';

interface StyleProps {
  style?: iconLinkStyle;
  iconPosition?: iconLinkPosition;
  textStyle?: iconLinkStyle;
}

const textColors = {
  [iconLinkStyle.PRIMARY]: colors.textPrimary,
  [iconLinkStyle.SECONDARY]: colors.textSecondary,
  [iconLinkStyle.ERROR]: colors.textError,
  [iconLinkStyle.SUCCESS]: colors.textSuccess,
  [iconLinkStyle.HIGH_CONTRAST]: colors.textHighContrast,
  [iconLinkStyle.MEDIUM_CONTRAST]: colors.textMediumContrast,
  [iconLinkStyle.LOW_CONTRAST]: colors.textMediumContrast,
  [iconLinkStyle.NEUTRAL_700]: colors.neutral700,
};

export const useStyles = makeStyles({
  root: ({ style }: StyleProps) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 16,
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.01em',
    color: textColors[style],
    width: '100%',
  }),
  icon: ({ iconPosition }: StyleProps) => ({
    width: 15,
    minWidth: 15,
    height: 15,
    objectFit: 'contain',
    order: iconPosition === iconLinkPosition.LEFT ? 0 : 1,
  }),
  text: ({ textStyle }: StyleProps) => ({
    color: textColors[textStyle],
    width: '100%',
  }),
});
