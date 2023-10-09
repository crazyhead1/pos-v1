import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

// colors
import { colors } from '../../../colors';

// types
import { badgeType, badgeSize, badgeStyle } from './Badge.types';

interface StyleProps {
  variant?: badgeType;
  size?: badgeSize;
  style?: badgeStyle;
}

const filledColors = {
  [badgeStyle.PRIMARY]: {
    bg: colors.primary50,
    text: colors.primary600,
    border: colors.primary50,
  },
  [badgeStyle.CRITICAL]: {
    bg: colors.destructive50,
    text: colors.destructive600,
    border: colors.destructive50,
  },
  [badgeStyle.HIGH]: {
    bg: colors.orange50,
    text: colors.orange600,
    border: colors.orange50,
  },
  [badgeStyle.MEDIUM]: {
    bg: colors.warning50,
    text: colors.warning600,
    border: colors.warning50,
  },
  [badgeStyle.LOW]: {
    bg: colors.cyan50,
    text: colors.cyan600,
    border: colors.cyan50,
  },
  [badgeStyle.MISREPORTED]: {
    bg: colors.secondary50,
    text: colors.secondary500,
    border: colors.secondary50,
  },
  [badgeStyle.RESOLVED]: {
    bg: colors.success50,
    text: colors.success600,
    border: colors.success50,
  },
  [badgeStyle.UNRELATED]: {
    bg: colors.neutral50,
    text: colors.neutral600,
    border: colors.neutral50,
  },
  [badgeStyle.SUCCESS]: {
    bg: colors.success50,
    text: colors.success600,
    border: colors.success50,
  },
  [badgeStyle.GREEN]: {
    bg: colors.green50,
    text: colors.green600,
    border: colors.green50,
  },
  [badgeStyle.PURPLE]: {
    bg: colors.purple50,
    text: colors.purple600,
    border: colors.purple50,
  },
  [badgeStyle.ACTIVE]: {
    bg: colors.success500,
    text: colors.white,
    border: colors.success500,
  },
  [badgeStyle.INACTIVE]: {
    bg: colors.neutral500,
    text: colors.white,
    border: colors.neutral500,
  },
  [badgeStyle.DARK]: {
    bg: colors.neutral900,
    text: colors.white,
    border: colors.neutral900,
  },
};

const outlinedColors = {
  [badgeStyle.PRIMARY]: {
    bg: colors.white,
    text: colors.primary500,
    border: alpha(colors.primary500, 0.25),
  },
  [badgeStyle.CRITICAL]: {
    bg: colors.white,
    text: colors.destructive500,
    border: alpha(colors.destructive500, 0.25),
  },
  [badgeStyle.HIGH]: {
    bg: colors.white,
    text: colors.orange500,
    border: alpha(colors.orange500, 0.25),
  },
  [badgeStyle.MEDIUM]: {
    bg: colors.white,
    text: colors.warning500,
    border: alpha(colors.warning500, 0.25),
  },
  [badgeStyle.LOW]: {
    bg: colors.white,
    text: colors.cyan500,
    border: alpha(colors.cyan500, 0.25),
  },
  [badgeStyle.MISREPORTED]: {
    bg: colors.white,
    text: colors.secondary500,
    border: alpha(colors.secondary500, 0.25),
  },
  [badgeStyle.RESOLVED]: {
    bg: colors.white,
    text: colors.success500,
    border: alpha(colors.success500, 0.25),
  },
  [badgeStyle.SUCCESS]: {
    bg: colors.white,
    text: colors.success600,
    border: colors.success400,
  },
  [badgeStyle.UNRELATED]: {
    bg: colors.white,
    text: colors.neutral500,
    border: alpha(colors.neutral500, 0.25),
  },
  [badgeStyle.ACTIVE]: {
    bg: colors.white,
    text: colors.success600,
    border: colors.success400,
  },
  [badgeStyle.INACTIVE]: {
    bg: colors.white,
    text: colors.neutral700,
    border: colors.neutral200,
  },
  [badgeStyle.DARK]: {
    bg: colors.white,
    text: colors.neutral900,
    border: colors.neutral400,
  },
};

const iconColors = {
  [badgeStyle.PRIMARY]: {
    bg: colors.bgPrimary,
    text: colors.white,
    border: colors.primary50,
  },
  [badgeStyle.CRITICAL]: {
    bg: colors.bgCritical,
    text: colors.white,
    border: colors.bgCritical,
  },
  [badgeStyle.HIGH]: {
    bg: colors.textHigh,
    text: colors.white,
    border: colors.textHigh,
  },
  [badgeStyle.MEDIUM]: {
    bg: colors.textMedium,
    text: colors.white,
    border: colors.textMedium,
  },
  [badgeStyle.LOW]: {
    bg: colors.textLow,
    text: colors.white,
    border: colors.textLow,
  },
  [badgeStyle.MISREPORTED]: {
    bg: colors.secondary,
    text: colors.white,
    border: colors.secondary,
  },
  [badgeStyle.RESOLVED]: {
    bg: colors.textResolved,
    text: colors.white,
    border: colors.textResolved,
  },
  [badgeStyle.UNRELATED]: {
    bg: colors.textMediumContrast,
    text: colors.white,
    border: colors.textMediumContrast,
  },
  [badgeStyle.DARK]: {
    bg: colors.dark,
    text: colors.white,
    border: colors.dark,
  },
};

const badgeColors = {
  [badgeType.FILLED]: filledColors,
  [badgeType.OUTLINED]: outlinedColors,
  [badgeType.ICON]: iconColors,
};

const height = {
  [badgeType.FILLED]: 32,
  [badgeType.OUTLINED]: 48,
  [badgeType.ICON]: 24,
};

const padding = {
  [badgeType.FILLED]: '0px 12px',
  [badgeType.OUTLINED]: '0px 16px',
  [badgeType.ICON]: '2px 10px 2px 4px',
};

const fontWeight = {
  [badgeType.FILLED]: 'Bold',
  [badgeType.OUTLINED]: 'Bold',
  [badgeType.ICON]: 600,
};

const lineHeight = {
  [badgeType.FILLED]: '19px',
  [badgeType.OUTLINED]: '19px',
  [badgeType.ICON]: '20px',
};

export const useStyles = makeStyles({
  root: ({ variant, size, style }: StyleProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size || height[variant],
    padding: padding[variant],
    gap: '4px',
    fontSize: 14,
    fontFamily: 'Manrope',
    fontWeight: fontWeight[variant],
    lineHeight: lineHeight[variant],
    letterSpacing: '0.01em',
    color: badgeColors[variant][style]?.text,
    backgroundColor: badgeColors[variant][style]?.bg,
    border: `1px solid ${badgeColors[variant][style]?.border}`,
    borderRadius: 20,
    width: 'fit-content',
    '&.Provider': {
      backgroundColor: colors.indigo50,
      borderColor: colors.indigo50,
      color: colors.indigo600,
    },
    '&.Coach': {
      backgroundColor: colors.warning50,
      borderColor: colors.warning50,
      color: colors.warning600,
    },
    '&.Prescriber': {
      backgroundColor: colors.cyan50,
      borderColor: colors.cyan50,
      color: colors.cyan600,
    },
    '&.Matchmaker': {
      backgroundColor: '#FEF6EE',
      borderColor: '#FEF6EE',
      color: '#E04F16',
    },
    '&.Socialworker': {
      backgroundColor: colors.purple50,
      borderColor: colors.purple50,
      color: colors.purple600,
    },
  }),
  icon: {
    width: 16,
    height: 16,
  },
});
