import { makeStyles } from '@mui/styles';

// colors
import { colors } from '../../../colors';

// types
import { underlineType } from './Link.types';

interface StyleProps {
  underline?: underlineType;
}

export const useStyles = makeStyles({
  root: {
    fontFamily: 'Manrope',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '19px',
    color: colors.primary600,
    transition: '0.4s',
    textDecoration: ({ underline }: StyleProps) => (underline === 'always' ? 'underline' : 'none'),
    '&:hover': {
      textDecoration: ({ underline }: StyleProps) => (underline === 'none' ? 'none' : 'underline'),
      opacity: 0.8,
    },
  },
});
